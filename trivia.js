// var a = 9
// var b = 9
//
// var sum = 0
// var addtwo = (a,b) =>{
//   sum += (a + b)
//   return sum
// }
//
// console.log(addtwo(a,b));

// Ruby OOP
//:wq
//multiple css put , between them
//
function recurBuzz(input){
  if(input == 0){
    return 0
  } //stops the recursion at 0 and returns it to one
  if(input < 0){
    return console.log("number has to be positive");
  }//if number isn't positive it will not run
  if (input % 5 == 0 && input % 3==0) {
    console.log('fizzbuzz');
  }else if(input%3==0){
    console.log('fizz');
  }else if (input%5==0) {
    console.log('buzz');
  }else{
    console.log(input);
  }
  recurBuzz(input - 1) // after one of the conditions are met it calls on itself and subtract 1
  //starts again until the 'stopper' stops the recursion loop
}
console.log(recurBuzz(100))
