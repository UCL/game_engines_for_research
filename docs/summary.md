# Creating a systematic literature review on the use of game engines in research

The aim is to create a system to recommend game engines that are useful for researchers and software engineers 
who want to develop computer games that can be used in research. This document records some of the 
process and design decisions made when creating the document. 

First aim: The document should be updatable, we're aiming for a reusable resource that will change as new
game engines appear and be flexible based on researcher needs. We're not aiming for a single static journal
publication, although that would be a nice secondary outcome. 

Second aim: Very low resources. We have no funding for this, so it must be achievable as 
a side project occupying a couple of hours a week. 

Third aim: Reusable resources. The workflows and resources we develop should be reusable for other 
research questions. 

Plan 0 (Stalled): In the first part of the project I developed a set of python scripts that would
- scrape a list of game engines from wikipedia
- search pubmed for papers mentioning the game engine name and the keyword "game"
This worked, creating a list of at least 2000 papers. The next stage of the plan was that I would
read the abstracts and classify the papers for inclusion/exclusion. This stage stalled as it can 
be very tedious reading many unrelated abstracts, and conversely I found myself spending too long 
reading papers that should be excluded from the review but which I found interesting anyway. 

Outcome - there is a [website summarising papers](https://github-pages.ucl.ac.uk/game_engines_for_research/static/index.html)
however too many papers remain unread for any meaningful analysis.

Plan 1: Let's try using AI to classify abstracts at scale. That should give us some useable stats initially, and a 
more curated list of papers that may be interesting to read.
This approach is inspired by the UCL IOE and ARC involvement with [Destiny project](https://eppi.ioe.ac.uk/cms/research/technology-research-development/destiny)
however with a lower requirement for evidence and lower resources available both in time and money.

Steps:
- Use OpenAlex instead of Pubmed. Pubmed sets too high a bar for a lot of research that may be interesting for this project 
and we're also interested in research that may not be healthcare related. 
- Train a lightweight text classification model (eg. modernBert) to perform classification of the abstracts.
  - Do they describe a game?
  - Is the game used for research?
  - Does the abstract say which game engine is in use?
By using a lightweight classifier we can run it locally, saving money. But we'll need training data.
- Use an agentic AI (Claude code) to classify a random sample of abstracts and use this to train the model. Will need to make sure the 
training data is balanced.







