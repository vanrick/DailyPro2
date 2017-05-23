const threeDArray = [
  [[[1,2],3,4],[5,6,7]],
  [[8,9,10],[11,12,13]]
]

// console.log([].concat.apply([],[].concat.apply([],[].concat.apply([],threeDArray))));

// function flattenArray(threeDArray){
//   for (var i = 0; i < threeDArray.length; i++) {
//     console.log(threeDArray[i]);
//     for (var j = 0; j < threeDArray[i].length; j++) {
//       console.log(threeDArray[i][j]);
//       for (var k = 0; k < threeDArray[i][j].length; k++) {
//         console.log(threeDArray[k][j][])
//         for (var h = 0; h < threeDArray[k].length; h++) {
//           console.log(threeDArray[h][k][j][i]);
//         }
//       }
//     }
//   }
// }
// flattenArray(threeDArray)

function steamrollArray(threeDArray) {
  var flatArray = [];

  flatten(threeDArray);

  function flatten(array) {
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flatten(array[i]);
      } else {
        flatArray.push(array[i]);
      }
    }
  }

  return flatArray;
}

console.log(steamrollArray(threeDArray))
