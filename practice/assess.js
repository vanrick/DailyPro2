function splitArray(arr, num){
  arr = shuffleArray(arr);
  console.log(arr);
  let divisor = arr.length/num
  let = result = []
  for (var i = 0; i < num; i++) {
    result.push(arr.slice(i*divisor, i*divisor + divisor))
  }
  console.log(result);
  return result
}

let array = [1,2,3,4,5,6]
// slice(0,2) (2,4) (4,6)
splitArray(array,3)

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i]; // 6
        array[i] = array[j];  //random number
        array[j] = temp; // 6
    }
    return array;
}
