let words = {
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
}

function convertObj(words){
  let keys = Object.keys(words)
  let result = {}
  for (var i = 0; i < keys.length; i++) {
    let arrayOfWords = words[keys[i]]
    for (var j = 0; j < arrayOfWords.length; j++) {
      let indWords = arrayOfWords[j].split(' ')
      for (var k = 0; k < indWords.length; k++) {
        if (result[indWords[k]]) {
          result[indWords[k]].count++
          if (result[indWords[k]].people.indexOf(keys[i]) < 0) {
            result[indWords[k]].people.push(keys[i])
          }
        }else{
          result[indWords[k]] = {
            count: 1,
            people: [keys[i]]
          }
        }
      }
    }
  }
  console.log(result);
  return result
}
convertObj(words)
