
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
      let tempResults = []
      for (var j = matrixArr.length-1; j >=0 ; j--) {
        tempResults.push(matrixArr[j][i])
      }
      result.push(tempResults)
    }
    console.log(result);
  return result
}
flipMatrix(matrix)
