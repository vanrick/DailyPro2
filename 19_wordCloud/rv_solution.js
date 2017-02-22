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

function wordCounts(input){
  let keys = Object.keys(input)
  // console.log(keys);
  let bucket = {}
  for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i])
    // console.log(input[keys[i]]);
    let lineWords = input[keys[i]]
    for (var j = 0; j < lineWords.length; j++) {
      let indwordArray = lineWords[j].split(' ')
      // console.log(indwordArray)
      for (var k = 0; k < indwordArray.length; k++) {
        // console.log(indwordArray[k])
        if (bucket[indwordArray[k]]) {
          bucket[indwordArray[k]].count ++
          if (bucket[indwordArray[k]].people.indexOf(keys[i])<0) {
            bucket[indwordArray[k]].people.push(keys[i])
          }
        }else{
          bucket[indwordArray[k]]={
            count:1,
            people:[keys[i]]
          }
        }
      }
    }
  }
  console.log(bucket);
return bucket
}

wordCounts(words)
