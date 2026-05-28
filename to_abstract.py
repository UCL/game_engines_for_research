# from https://stackoverflow.com/questions/72093757/running-python-loop-to-iterate-and-undo-inverted-index

import sys
import json

def undo_index(rev_index):
    word_index = []
    for word,v in rev_index.items():
        for word_position in v:
            word_index.append([word, word_position])
    word_index = sorted(word_index,key = lambda x : x[1])
    abstract = [word[0] for word in word_index]
    abstract = " ".join(abstract)
    return(abstract)


if __name__ == "__main__":
    print ("opening ", sys.argv[1])
    with open(sys.argv[1]) as f:
        inverted_index = f.read()
        inverted_index = json.loads(inverted_index)
        abstract = undo_index(inverted_index['abstract_inverted_index'])
        title = inverted_index['title'] 
        print ("# ", title)
        print (abstract)


