let arr = [1,2,3,4,5,6]

function splitArrays(arr,num){
  arr = shuffleArray(arr)
  console.log(arr);
  let result = []
  let tempArr = []
  let divided = arr.length/num
  let newArr = arr.slice(divided,arr.length)
  console.log(newArr);
  for (var i = 0; i < divided; i++) {
    tempArr.push(arr[i])
  }
  result.push(tempArr)
  tempArr = []
  for (var i = 0; i < newArr.length; i++) {
    tempArr.push(newArr[i])
  }
  result.push(tempArr)
  // result.push(tempArr)

  console.log(result);
  return result
}

splitArrays(arr,2)

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
