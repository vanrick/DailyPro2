let array1 = [ "cat", "dog", "fish", "zebra" ]
let array2 = [ "lion", "aardvark", "gorilla" ]

function alphabeticalArray(arr1,arr2){
  return arr1.concat(arr2).sort()
}

console.log(alphabeticalArray(array1, array2))
