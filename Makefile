static/*.html: src/index.html update_web_pages.py data/game_engine.db data/game_engine_papers.db
	uv run update_web_pages.py

data/game_engine.db:
	uv run update_game_engine_list.py

data/game_engine_papers.db:
	uv run update_publication_lists.py
	uv run add_relevancy_to_game_engine_list.py
