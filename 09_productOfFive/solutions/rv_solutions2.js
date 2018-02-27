let num1 = 127289373913828309127381263
let num2 = '111333321'

var nums = '127289373913828309127381263'

// function fiveAdjacent(num){
//   var arr = (''+num).split('').map((t)=>{
//     return parseInt(t)
//   })
//   var currentMax = 0
//   for (var i = 0; i < arr.length; i++) {
//     var currentProduct = arr[i+0]*arr[i+1]*arr[i+2]*arr[i+3]*arr[i+4]
//     if (currentProduct > currentMax) {
//       currentMax = currentProduct
//     }
//   }
//   return currentMax
// }
// console.log(fiveAdjacent(nums));

function productOfFive(number){
  let arr= number.split('').map(function(num){
     return Number(num)
  })
  let currentResult = 0
  for (var i = 0; i < arr.length-4; i++) {
    let currentProduct = arr[i+0]*arr[i+1]*arr[i+2]*arr[i+3]*arr[i+4]
    if (currentProduct > currentResult) {
      currentResult = currentProduct
    }
  }
  return currentResult
}

console.log(productOfFive(nums));
