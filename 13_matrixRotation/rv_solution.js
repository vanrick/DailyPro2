// let pali = 'nurses run'
//
// function palidromic(input){
//   input=input.replace(/\s/g, '').toLowerCase().split('').join('')
//
//   if (input === input.split('').reverse().join('')) {
//     return true
//   }
//   return false
// }
//
// console.log(palidromic(pali));

let matrix2x3 = [[1, 64, 23],

                [22, 50, 2]]
let matrix3x2 = [[22,1],
                [50,64],
                [2,23]]

var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];

function matrix(array){
  let results = []
for (var i = 0; i < array[0].length; i++) {
  // console.log(array[0]);
  let tempResults = []
  for (var j = array.length-1; j >= 0; j--) {
    console.log('j ',array[j][i]);
    tempResults.push(array[j][i])
  }
  // console.log(tempResults);
  results.push(tempResults)
}
// console.log('hit');
console.log(results);
return results
}

matrix(matrix2x3)
