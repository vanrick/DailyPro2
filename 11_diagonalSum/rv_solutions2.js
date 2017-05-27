let square4x4 =
[[1, 0, 0, 0],

[0, 1, 0, 0],

[0, 0, 1, 0],

[0, 0, 0, 1]]

let square5x5 =
[[2, 5, 1, 3, 9],

 [4, 1, 3, 0, 8],

 [1, 0, 9, 7, 6],

 [1, 7, 7, 3, 0],

 [3, 3, 8, 2, 4]]

function diagSum(numArray){
  let sum = 0
  for (var i = 0; i < numArray.length; i++) {
    sum += numArray[i][i]
  }
  return sum
}



console.log(diagSum(square4x4));

function fizzBuzz(num){
  if (num == 1) {
    return
  }
  if (num % 3 == 0 && num % 5 == 0) {
    console.log('fizzBuzz');
  }else if(num % 3 == 0){
    console.log('fizz');
  }else if(num % 5 == 0){
    console.log('buzz');
  }else{
    console.log(num);
  }
  fizzBuzz(num-1)
}
