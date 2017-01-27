//https://github.com/gSchool/DailyProgrammer
//07 findGreater

var num1 = [1,2,3,4,5,6]

// function apples(input,compareAgainst){
//   var large = []
//  for (var i = 0; i < input.length; i++) {
//    if(input[i] > compareAgainst){
//      large.push(input[i])
//    }
//  }
//  console.log(large);
//  return large
// }
//
// apples(num1,3)
function apples(array,x){
  return num1.filter(function(element){
    return element > x


  })
}

console.log(apples(num1,3))
