const threeDArray = [
  [[[1,8],2,3],[4,5,6]],
  [[7,8,9],[10,11,12]]
]

// function flatten(threeDArray){
//   console.log(threeDArray.concat([[[13,14,15]]]))
// }

// let array2 = [].concat.apply([],threeDArray)

console.log([].concat.apply([],[].concat.apply([],[].concat.apply([],threeDArray))));
