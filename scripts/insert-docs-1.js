
tutorial1 = {
    "title": "insert-docs-1-script",
    "author": "Leodanis",
    "contributors": [
        "Aldren",
        "Jim",
        "Joanna"
    ],
    "url": "https://realpython.com/iterate-through-dictionary-python/"
}

tutorial2 = {
    "title": "insert-docs-2-script",
    "author": "Joanna",
    "contributors": [
        "Adriana",
        "David",
        "Dan",
        "Jim",
        "Pavel"
    ],
    "url": "https://realpython.com/python-f-strings/"
}
//use rptutorials;
db.tutorial.insertMany([tutorial1, tutorial2])