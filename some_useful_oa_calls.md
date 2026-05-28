https://api.openalex.org/works?search.semantic=describes%20the%20use%20of%20a%20computer%20game%20to%20perform%20research

https://api.openalex.org/works?search=(godot%20AND%20game)

# gets the title and abstract for a single record.
curl --request GET \
  --url 'https://api.openalex.org/works/W2057644126?api_key=xxxx&select=title%2Cabstract_inverted_index'

pass through to_abstract.py to get back to text abstract
