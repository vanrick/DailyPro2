let obj =
{
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
      },
    ]
}

function objToJson(input){
  console.log(input.books);
  let json = {}
  json.author = [{}]
  console.log(json.author);
  // for (var i = 0; i < input.length; i++) {
  //   json.input[i]
  // }
  console.log(json);
  return json
}

objToJson(obj)
