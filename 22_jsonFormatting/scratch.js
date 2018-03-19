let booksObj = {
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

function authorArray(obj) {
    let keys = Object.keys(obj)
    let result = []
    for (let i = 0; i < keys.length; i++) {
        let bookz = obj[keys[i]]
        for (let j = 0; j < bookz.length; j++) {
            // console.log(bookz[j]);
            if (keys[i].indexOf('1') > -1) {
                result.push({
                    'id': bookz[j].author_id,
                    'name': bookz[j].author_name
                })
            }
        }
    }
    console.log('result: ', result);
    return result
}

function jsonFormatter(obj) {
    let keys = Object.keys(obj)
    let result = [].
}
authorArray(booksObj)
jsonFormatter(booksObj)