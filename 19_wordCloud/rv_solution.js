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
  // console.log(input["Ila Huels"]);
  let ila = input["Ila Huels"].toLowerCase().split(' ')
  let cris = input['Cristopher Feest']
  // let first = ila.toLowerCase().split(' ');
  console.log(ila);
  // return input.reduce(function(results, words, i){
  //   if (results[words]) {
  //     results[words]++
  //   }else{
  //     results[words]=1
  //   }
  //   console.log(results);
  //   return results
  // },{})
}

wordCounts(words)
