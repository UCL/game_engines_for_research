import pandas as pd
import json
import time
import os

from game_engine_software.common import get_url


def update_game_engine_list(filename: str, name_key="Name(Alternate name)"):
    """Writes a list of game_engine dictionaries (currently derived from
    wikipedia).

    Does not overwrite any data already existing in filename
    :param: a file to read/write to
    :param: The key to find the engine name in from wikipedia query
    """

    wiki_cache_file = "data/wikipedia_cache.json"
    try:
        cache_time = os.stat(wiki_cache_file).st_mtime
        cache_age = time.time() - cache_time
    except FileNotFoundError:
        cache_age = float("inf")

    if cache_age < 3600 * 24:
        print(wiki_cache_file + " less than 24 hours old, re-using")
        with open(wiki_cache_file) as f:
            game_engines = json.load(f)[0]
    else:
        body = get_url(
            "https://www.wikitable2json.com/api/List_of_game_engines?table=0&keyRows=1"
        )
        game_engines = body[0]
        with open("data/wikipedia_cache.json", "w") as f:
            json.dump(body, f)

    try:
        games_df = pd.read_json(filename)
    except ValueError:
        games_df = pd.DataFrame()

    for i, engine in enumerate(game_engines):
        engine_name = engine.get(name_key)
        if games_df.empty or len(games_df[games_df["Name"] == engine_name]) == 0:
            # paper not in database
            print(f"Adding {engine_name} to database")
            new_game = pd.DataFrame(
                {
                    "Name": engine_name,
                    "PubMed citations": "-",
                    "PubMed game citations": "-",
                    "Relevancy and read papers.": "-",
                    "PubMed Link": "",
                    "PubMed Game Link": "",
                    "Paper IDs": [[]],
                }
            )
            games_df = pd.concat([games_df, new_game])

    games_df.to_json(filename, indent=2, orient="records")

    return
