
function zipArrays(arr1, arr2){
  let result = []
  let extra = []
  if (arr1.length < arr2.length) {
    extra = arr2.splice(arr1.length,arr2.length)
  }
  if (arr2.length < arr1.length) {
    extra = arr1.splice(arr2.length, arr1.length)
  }
  for (var i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i])
  }
  return result.concat(extra)
}
console.log(zipArrays([1,2,3,9],[4,5,6]));
