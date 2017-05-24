let numsArray = [6,3,5,4,3,4,4,5]
function numUpDownEven(numArray){
  let result = []
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] == numArray[i+1]) {
      result.push('even')
    }else if(numArray[i] > numArray[i+1]){
      result.push('down')
    }else if(numArray[i] < numArray[i+1]){
      result.push('up')
    }
  }
  return result
}

console.log(numUpDownEven(numsArray));
