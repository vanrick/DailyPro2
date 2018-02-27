let numArray = [1,2,3,4,5,6,7,8]

function findGreaterArr(numArr, num){
  let result = []
  numArr.forEach(function(numz){
    if (numz > num) {
      result.push(numz)
    }
  })
  return result
}

console.log(findGreaterArr(numArray, 5));
