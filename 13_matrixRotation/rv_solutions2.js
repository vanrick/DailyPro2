
let matrix =
[[1,64,23],
[22,50,2]];

let matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];

let matrix2 =
[[29,62,8],
[12,60, 31],
[99,79,12]];

function flipMatrix(matrixArr){
  let result = []
  for (var i = 0; i < matrixArr[0].length; i++) {
    // console.log('top: ',matrixArr[0]);
    let tempResults = []
    for (var j = matrixArr.length-1; j >= 0; j--) {
      // console.log('bottom J: ',j);
      // console.log('bottom I: ',i);
      // console.log('bottom i: ', matrixArr[i]);
      // console.log('bottom j: ', matrixArr[j]);
      // console.log('bottom j i: ',matrixArr[j][i])
      tempResults.push(matrixArr[j][i])
    }
    result.push(tempResults)
  }
  return result
}
// flipMatrix(matrix)
console.log(flipMatrix(matrix2));
