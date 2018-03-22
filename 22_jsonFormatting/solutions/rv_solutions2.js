let oldJSON = {
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

function makingAuthorArr(json) {
    let keys = Object.keys(json);
    let authorArr = []
    for (var i = 0; i < keys.length; i++) {
        let objArr = json[keys[i]]
        for (var j = 0; j < objArr.length; j++) {
            if (keys[i].indexOf('1') > -1) {
                authorArr.push({
                    'id': objArr[j].author_id,
                    'name': objArr[j].author_name
                })
            }

        }
    }
    console.log(authorArr);
    return authorArr
}

function newJSON(json) {
    let keys = Object.keys(json)
    let result = {}
    for (var i = 0; i < keys.length; i++) {
        let arraysOfAuthors = oldJSON[keys[i]]
        for (var j = 0; j < arraysOfAuthors.length; j++) {
            json[arraysOfAuthors[j]] = []
        }
    }
    // console.log(json);
}

makingAuthorArr(oldJSON)
newJSON(oldJSON)