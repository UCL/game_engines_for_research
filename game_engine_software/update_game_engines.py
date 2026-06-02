import pandas as pd
import time
import os

from game_engine_software.common import get_url


def update_game_engine_list(filename : str, name_key = "Name(Alternate name)"):
    """Writes a list of game_engine dictionaries (currently derived from
    wikipedia). Does not overwrite any data already existing in filename
    :param: a file to read/write to
    :param: The key to find the engine name in from wikipedia query
    """

    try:
        games_df = pd.read_json(filename)
    except ValueError:
        games_df = pd.DataFrame()

    body = get_url(
        "https://www.wikitable2json.com/api/List_of_game_engines?table=0&keyRows=1"
    )

    game_engines = body[0]
    for i, engine in enumerate(game_engines):
      engine_name = engine.get(name_key)
      if ( games_df.empty or 
             games_df[games_df["Name"] == engine_name]) == 0:
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
                    "Paper IDs": [],
                }
            )
            games_df = pd.concat([games_df, new_game])


    games_df.to_json(filename, indent=2, orient="records")

    return
