### Treino dia 202207-30 python-pymongo

link tutorial: https://realpython.com/introduction-to-mongodb-and-python/


### comandos: 
```
docker-compose exec mongodb bash mongo
```

mongo creates databases and collections lazily 
create only after you insert the first documents.
bson types: 
Binary Json https://www.mongodb.com/docs/manual/reference/bson-types/

$type ==> 
$isNumber

```
let json_value = {
    "title": "Reading and Writing CSV Files in Python",
    "author": "Jon",
    "contributors": [
        "Aldren",
        "Geir Arne",
        "Joanna",
        "Jason"
    ],
    "url": "https://realpython.com/python-csv/"
}

use rptutorials
db.tutorial.insertOne(json_value)

```

```
tutorial1 = {
    "title": "How to Iterate Through a Dictionary in Python",
    "author": "Leodanis",
    "contributors": [
        "Aldren",
        "Jim",
        "Joanna"
    ],
    "url": "https://realpython.com/iterate-through-dictionary-python/"
}

tutorial2 = {
     "title": "Python 3's f-Strings: An Improved String Formatting Syntax",
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
db.tutorial.insertMany([tutorial1, tutorial2])
```

### Pergunta: consigo carregar um script direto no mongo?
https://www.mongodb.com/docs/manual/reference/method/load/

testei escrever o script scripts/insert-docs-1.js
funcionou parcialmente, não consegui usar o mesmo comando 
use <db>
para selecionar o DB

### Pergunta: Teste 2 consigo carregar um script direto no mongo?

docs: https://www.mongodb.com/docs/manual/tutorial/write-scripts-for-the-mongo-shell/

usando os comandos consegui escolhar o banco que queria
```
conn = new Mongo();
db = conn.getDB("rptutorials");
```

https://www.mongodb.com/docs/manual/reference/bson-types/#objectid

insigths conteudos:
https://realpython.com/flask-connexion-rest-api/
https://realpython.com/learning-paths/become-python-web-developer/

> FIM TREINOS

Aprendido
carregar script metodo load



