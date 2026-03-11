import pandas as pd
import time
import os

from game_engine_software.common import get_url


def get_game_engines():
    """Returns a list of game_engine dictionaries (currently derived from
    wikipedia)"""
    # TODO we should read in the existing data base /data/game_engine.db
    # to allow us to include engines not listed on wikipedia and also to
    # alert us when a new engine is found
    body = get_url(
        "https://www.wikitable2json.com/api/List_of_game_engines?table=0&keyRows=1"
    )
    return body[0]


def get_citations_and_url(
    engine_name: str,
    skip_search: bool,
    max_citations: int,
    second_term: str = "",
    pm_key: str | None = None,
):
    """Searches database (pubmed) to get citations that may reference the
    engine_name.

    :param engine_name: the search term to use
    :param skip_search: we can skip the search and just return the url
    """
    search_term = engine_name.replace(" ", "-")
    url = (
        'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&term="'
        + search_term
        + '"'
    )

    # without API key we can do 3 queries a second. With we can do 10.
    if pm_key is not None:
        url = url + "&api_key" + pm_key

    human_url = 'https://pubmed.ncbi.nlm.nih.gov/?term="' + search_term + '"'

    if len(second_term) > 0:
        url = url + '+and+"' + second_term + '"'
        human_url = human_url + '+and+"' + second_term + '"'

    # TODO, this doesn't always return max_citations. It may return only 20
    url = url + "&retmax = " + str(max_citations)

    count = "-"
    paperIDs = []
    if not skip_search:
        body = get_url(url)
        count = body.get("esearchresult").get("count")

        paperIDs = body.get("esearchresult").get("idlist")

    return human_url, count, paperIDs


if __name__ == "__main__":
    game_engines = get_game_engines()

    try:
        games_df = pd.read_json("data/game_engine.db")
    except ValueError:
        games_df = pd.DataFrame()

    name_key = "Name(Alternate name)"
    max_citations = 100
    api_throttle_time = float(
        os.environ.get("PUBMED_API_THROTTLE", 0.1)
    )  # keep the pubmed api rate below 10 per second
    pubmed_key = os.environ.get("PUBMED_API_KEY", None)
    for i, engine in enumerate(game_engines):
        engine_name = engine.get(name_key)
        print(
            "processing " + engine_name + " : " + str(i) + "/" + str(len(game_engines))
        )
        url, count, _ = get_citations_and_url(
            engine_name, False, max_citations, pm_key=pubmed_key
        )
        time.sleep(api_throttle_time)

        if int(count) == 0:
            game_url, game_count, paperIDs = get_citations_and_url(
                engine_name, True, max_citations, "game", pm_key=pubmed_key
            )
            time.sleep(api_throttle_time)
        else:
            game_url, game_count, paperIDs = get_citations_and_url(
                engine_name, False, max_citations, "game", pm_key=pubmed_key
            )
            time.sleep(api_throttle_time)

            if int(game_count) > len(paperIDs):
                print(
                    "Found more than "
                    + str(max_citations)
                    + " for "
                    + engine_name
                    + "Only collected first "
                    + str(len(paperIDs))
                )

        if len(games_df[games_df["Name"] == engine_name]) == 0:
            # paper not in database
            print(f"Adding {engine_name} to database")
            new_game = pd.DataFrame(
                {
                    "Name": engine_name,
                    "PubMed citations": count,
                    "PubMed game citations": game_count,
                    "Relevancy and read papers.": "-",
                    "PubMed Link": url,
                    "PubMed Game Link": game_url,
                    "Paper IDs": [paperIDs],
                }
            )
            print(new_game["Name"])
            print
            games_df = pd.concat([games_df, new_game])

        games_df.to_json("data/game_engine.db", indent=2, orient="records")

    # create a pandas data frame and save it as json to make human readable and editable
    games_df.to_json("data/game_engine.db", indent=2, orient="records")
