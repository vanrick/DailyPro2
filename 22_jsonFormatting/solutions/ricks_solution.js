let x = require('../books.json')
var nonJson = {
    "books": [{
            "id": 1,
            "name": "You don't know JS",
            "author_id": 1,
            "author_name": "Bonnie"
        },
        {
            "id": 1,
            "name": "You don't know JS",
            "author_id": 2,
            "author_name": "Eiseman"
        },
        {
            "id": 2,
            "name": "You know some JS",
            "author_id": 1,
            "author_name": "Bonnie"
        }
    ]
}

function jsonIt(json) {
    let books = {}

    for (var i = 0; i < json.books.length; i++) {
        if (!books[json.books[i].id]) {
            books[json.books[i].id] = {
                'id': json.books[i].id,
                'name': json.books[i].name,
                'author': []
            }
        }
        if (books[json.books[i].id].author.find(function(el) {
                return el.id === json.books[i].author_id
            }) === undefined) {
            books[json.books[i].id].author.push({
                'id': json.books[i].author_id,
                'name': json.books[i].author_name
            })
        }
    }
    var arr = []
    for (var key in books) {
        arr.push(books[key])
    }
    console.log(JSON.stringify(arr));
    return JSON.stringify(arr)
}

jsonIt(x)