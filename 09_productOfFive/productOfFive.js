//https://github.com/gSchool/DailyProgrammer
//09 Product of Five

var numbers = '127289373913828309127381263'
var large = '111333321'
var num = '00000'

function productOfFive(input){

  var sorted = input.split('').sort(function (a, b) {  return b - a;  }).join('')
  console.log(sorted);
  // var convNums = parseInt(sorted)
  // input.sort(function (a, b) {  return a - b;  });
  var arr = []
  for (var i = 0; i < 5; i++) {
    arr.push(parseInt(sorted[i]))
  }
  console.log(arr);
  return arr.reduce(function(a,b){
    return a * b
  })

}

console.log(productOfFive(numbers));
