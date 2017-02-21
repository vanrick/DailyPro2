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
  let ila = input["Ila Huels"].join(' ').toLowerCase()
  let cris = input['Cristopher Feest'].join(' ')
  // ila.split(' ')
  // console.log(ila);
  return ila.split(' ').reduce(function(results, words, i){
    if (results[words]) {
      results[words]++
    }else{
      results[words]=1
    }
    console.log(results);
    return results
  },{})

}

wordCounts(words)
