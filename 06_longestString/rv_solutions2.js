let arrayOfStrings = ["truck", "sidewalk", "book"]

function findLongestStr(str){
  let result = {}
  let compare = 0;
  str.forEach(function(strings){
    if (strings.length > compare) {
      compare = strings.length
      result = {}
      result[strings] = compare
    }
  })
return result
}

console.log(findLongestStr(arrayOfStrings));
