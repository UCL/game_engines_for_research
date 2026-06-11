import pandas as pd
import time
import os

from game_engine_software.openalex import get_openalex_citations_and_url


if __name__ == "__main__":
    games_df = pd.read_json("data/game_engine.db")

    name_key = "Name"
    max_citations = 100
    api_throttle_time = float(
        os.environ.get("OPENALEX_API_THROTTLE", 0.0)
    )  # may not need to limit openalex
    oa_key = os.environ.get("OA_API_KEY", None)
    for index, engine in games_df.iterrows():
        engine_name = engine.loc[name_key]
        print(
            "processing " + engine_name + " : " + str(index) + "/" + str(len(games_df))
        )
        try:
            url, count, _ = get_openalex_citations_and_url(
                engine_name, False, max_citations, oa_key=oa_key
            )
        except IOError:
            print("Hit api limit, pause and try again")
            time.sleep(1)
            url, count, _ = get_openalex_citations_and_url(
                engine_name, False, max_citations, oa_key=oa_key
            )
            api_throttle_time += 0.020

        time.sleep(api_throttle_time)

        if int(count) == 0:
            game_url, game_count, paperIDs = get_openalex_citations_and_url(
                engine_name, True, max_citations, "game", om_key=oa_key
            )
            time.sleep(api_throttle_time)
        else:
            try:
                game_url, game_count, paperIDs = get_openalex_citations_and_url(
                    engine_name, False, max_citations, "game", oa_key=oa_key
                )

            except IOError:
                print("Hit api limit, pause and try again")
                time.sleep(1)
                game_url, game_count, paperIDs = get_openalex_citations_and_url(
                    engine_name, False, max_citations, "game", oa_key=oa_key
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

        engine["OpenAlex citations"] = count
        engine["OpenAlex game citations"] = game_count
        engine["OpenAlex Link"] = url
        engine["OpenAlex Game Link"] = game_url
        engine["OpenAlex Paper IDs"] = ([paperIDs],)

        games_df.to_json("data/game_engine.db", indent=2, orient="records")
