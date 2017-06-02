let oldJSON = {
    "books": [
      {
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

function newJSON(json){
  let keys = Object.keys(json)
  let result = {}
  for (var i = 0; i < keys.length; i++) {
    let arraysOfAuthors = oldJSON[keys[i]]
    for (var j = 0; j < arraysOfAuthors.length; j++) {
      result.author = []

      }
    }
    console.log(result);
  }


newJSON(oldJSON)
