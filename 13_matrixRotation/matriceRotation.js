// 13_matrixRotation
var matrix = [[1, 64, 23],
              [22, 50, 2]];

var matrix1 = [[44, 23],
               [21, 10],
               [9, 28],
               [85, 16],
               [33, 18]];
var results = []

function rotate(input){
  var results = []
  for (var j = 0; j < input[0].length; j++) {
    var temp = []
    for (var i = input.length-1; i > -1; i--) {
      temp.push(input[i][j])
    }
    results.push(temp)
  }
  console.log(results);
  return results
}

rotate(matrix1)
