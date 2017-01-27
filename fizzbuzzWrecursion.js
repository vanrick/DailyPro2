//32 recursion for Fizz Buzz


var list = [1,2,3,4];
addOne(list) // returns [2,3,4,5];

function addOne(array) {
  for (var i = 0; i < array.length; i++) {
    array[i]++
  }
  return array
}

function addOne(array) {
  function recursion(array, index) {
    // base case
    if (array.length == index) {
      return array
    }
    array[index]++
    return recursion(array, index + 1)
  }
  array = recursion(array, 0)
  return array
}
//doing the actual work

// function buzzin(input){
//   for (var i = 1; i < input; i++) {
//
//   if (i % 5 == 0 && i % 3==0) {
//     console.log('fizzbuzz');
//   }else if(i % 3 == 0){
//     console.log('fizz');
//   }else if(i % 5 == 0){
//     console.log('buzz');
//   }else if(i == 0){
//     return 1
//   }else{
//     console.log(i);
//   }
// }
// }
// buzzin(100)

function recurBuzz(input){
  if(input == 0){
    return 1
  }
  if(input < 0){
    return console.log("number has to be positive");
  }if (input % 5 == 0 && input % 3==0) {
    console.log('fizzbuzz');
  }else if(input%3==0){
    console.log('fizz');
  }else if (input%5==0) {
    console.log('buzz');
  }else{
    console.log(input);
  }
  recurBuzz(input - 1)
}
recurBuzz(100)
