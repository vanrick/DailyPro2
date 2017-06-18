// var y;
//   function modifyVariables(x)
//   {
//     var z = 5;
//     x += 2;
//     y += x + z;
//   }
//
//   var x = 1;
//   var y = 2;
//   var z = 3;
//   modifyVariables(x);
// console.log(x);
//   console.log(y);
//   console.log(z);

let array = [1,2,3,4,5,6]

function splitArray(array, num){
  array = shuffleArray(array)
  let divisor = array.length/num
  let returnArray = []
  for (var i = 0; i < num; i++) {
      returnArray.push(array.slice(i*divisor, i*divisor + divisor))
  }
  return returnArray
}

console.log(splitArray(array,2))

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i]; //6
        array[i] = array[j];  //random number
        array[j] = temp; // 6
    }
    return array;
}
