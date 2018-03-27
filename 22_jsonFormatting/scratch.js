let x = require('./books.json')
    // console.log(x);


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

// function makingAuthorArr(json) {
//     let authorArr = []
//     for (var i = 0; i < keys.length; i++) {
//         let objArr = json[keys[i]]

//     }
//     console.log(authorArr);
//     return authorArr
// }

makingAuthorArr(booksObj)

function jsonConverter(obj) {
    let keys = Object.keys(obj)
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        let inside = obj[keys]
        for (let j = 0; j < inside.length; j++) {
            if (!result[inside[j].id]) {
                result[inside[j].id] = {
                    'id': inside[j].id,
                    'name': inside[j].name,
                    'author': []
                }
            } else {
                result[inside[j].id].author.push({
                    'id': inside[j].author_id,
                    'name': inside[j].author_name
                })
            }

        }
    }
    var arr = []
    for (var key in result) {
        arr.push(result[key])
    }
    console.log(JSON.stringify(arr));

    return result
}

jsonConverter(booksObj)