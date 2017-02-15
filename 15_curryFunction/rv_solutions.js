// var fullname = 'Big Ben'
// var awesome = {
//
//   fullname: 'other Big Ben',
//
//   things: {
//       fullname: 'other other Big Ben',
//       getFullName: function(){
//        return fullname
//        }
//     }
// }
// console.log(awesome.things.getFullName());
let num = 10
let num2 = 11

function add(num1){
  let answers = 0
  return function itz(num2){
    answers = (num1 + num2)
    return answers
  }
}

console.log(add(num)(num2));
