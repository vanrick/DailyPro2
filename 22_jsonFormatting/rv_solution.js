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
  // console.log(input.books);
  let keys = Object.keys(input)
  // console.log(keys);
  let json = {}
  for (var i = 0; i < keys.length; i++) {
    // console.log(input[keys[i]])
    let identifiers = input[keys[i]]
    for (var j = 0; j < identifiers.length; j++) {
      // console.log(Object.keys(identifiers[j]))
      let objKeys = identifiers[j]['id']
      // console.log(identifiers[j]['id']);
      if (objKeys == '1') {
        console.log('1 ',identifiers[j]);
        json[identifiers[j]]
      }else if(objKeys == '2'){
        // console.log('2 ',identifiers[j]);
      }else{
        
      }
    }
  }

  console.log(json);
  return json
}

objToJson(obj)
