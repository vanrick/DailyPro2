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

function jsonConverter(obj) {
    let keys = Object.keys(obj)
        // console.log(keys);
    let result = {}
    for (let i = 0; i < keys.length; i++) {
        // console.log(obj[keys]);
        let inside = obj[keys]
        for (let j = 0; j < inside.length; j++) {
            // console.log(inside[j]['id']);
            if (inside[j]['id'] == 1) {
                console.log(inside[j]);

            }

        }
    }
}

jsonConverter(booksObj)