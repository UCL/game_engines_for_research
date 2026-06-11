import pandas as pd
import time
import os

from game_engine_software.pubmed import get_pubmed_citations_and_url


if __name__ == "__main__":
    games_df = pd.read_json("data/game_engine.db")

    name_key = "Name"
    max_citations = 100
    api_throttle_time = float(
        os.environ.get("PUBMED_API_THROTTLE", 0.1)
    )  # keep the pubmed api rate below 10 per second
    pubmed_key = os.environ.get("PUBMED_API_KEY", None)
    for index, engine in games_df.iterrows():
        engine_name = engine.loc[name_key]
        print(
            "processing " + engine_name + " : " + str(index) + "/" + str(len(games_df))
        )
        try:
            url, count, _ = get_pubmed_citations_and_url(
                engine_name, False, max_citations, pm_key=pubmed_key
            )
        except IOError:
            print("Hit api limit, pause and try again")
            time.sleep(1)
            url, count, _ = get_pubmed_citations_and_url(
                engine_name, False, max_citations, pm_key=pubmed_key
            )
            api_throttle_time += 0.020

        time.sleep(api_throttle_time)

        if int(count) == 0:
            game_url, game_count, paperIDs = get_pubmed_citations_and_url(
                engine_name, True, max_citations, "game", pm_key=pubmed_key
            )
            time.sleep(api_throttle_time)
        else:
            try:
                game_url, game_count, paperIDs = get_pubmed_citations_and_url(
                    engine_name, False, max_citations, "game", pm_key=pubmed_key
                )

            except IOError:
                print("Hit api limit, pause and try again")
                time.sleep(1)
                game_url, game_count, paperIDs = get_pubmed_citations_and_url(
                    engine_name, False, max_citations, "game", pm_key=pubmed_key
                )
                api_throttle_time += 0.020

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

        engine["PubMed citations"] = count
        engine["PubMed game citations"] = game_count
        engine["PubMed Link"] = url
        engine["PubMed Game Link"] = game_url
        engine["Paper IDs"] = ([paperIDs],)

        games_df.to_json("data/game_engine.db", indent=2, orient="records")
