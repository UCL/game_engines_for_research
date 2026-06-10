from game_engine_software.common import get_url


def get_pubmed_citations_and_url(
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
    :raises IOError: if there is a time out error from pubmed.
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
        result = body.get("esearchresult")
        if result is None:
            if body.get("error", "") == "API rate limit exceeded":
                raise IOError
            raise ValueError("Result not found" + body)

        count = body.get("esearchresult").get("count")

        paperIDs = body.get("esearchresult").get("idlist")

    return human_url, count, paperIDs
