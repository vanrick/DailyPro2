function splitArray(arr, num){
  arr = shuffleArray(arr);
  // console.log(arr);
  let divisor = arr.length/num
  let = result = []
  for (var i = 0; i < num; i++) {
    // console.log('i ',i);
    // console.log('divisor ', divisor);
    // console.log('i x div ',i*divisor);
    result.push(arr.slice(i*divisor, i*divisor + divisor))
  }
  // console.log(result);
  return result
}

let array = [1,2,3,4,5,6]
// slice(0,2) (2,4) (4,6)
splitArray(array,3)

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log('j ',j);
        var temp = array[i]; // 6
        console.log('temp ',temp);
        array[i] = array[j];  //random number
        console.log('array[i] ', array[i]);
        array[j] = temp; // 6
        console.log('array[j] ', array[j]);
    }
    return array;
}
