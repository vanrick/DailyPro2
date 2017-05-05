// let num = [3,5,2,4,9]
//
// function double(num){
//   return num.map(function(number, anotherone){
//     console.log(anotherone);
//     return number * 2
//   })
// }
//
// console.log(double(num));

// let numz = [3,5,2,4,9];
//
// function doublez(num){
//   return num.reduce(function(prev,curr,index,array){
//     prev[index] = curr
//     return prev
//   },{})
// }
//
// console.log(doublez(numz));

let nums = [3,5,2,4,9];

function doubles(num){
  let array = []
  num.forEach((key)=>{
    array.push(key * 2)
  })
  console.log(array);
  return array
}

doubles(nums)
