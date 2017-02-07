let arr1 = [ "cat", "dog", "fish", "zebra" ]
let arr2 = [ "lion", "aardvark", "gorilla" ]
let arr3 = [1,2,3,'zonk',4,5,5]

function organize(a1, a2){
  let arr = a1.concat(a2).sort()
  return arr
}
// let organize = (a1, a2)=> a1.concat(a2).sort()


console.log(organize(arr2, arr3));
