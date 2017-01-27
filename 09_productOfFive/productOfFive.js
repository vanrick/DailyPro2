//https://github.com/gSchool/DailyProgrammer
//09 Product of Five

var numbers = '127289373913828309127381263'

function productOfFive(input){

  var sorted = numbers.split('').sort(function (a, b) {  return b - a;  }).join('')
  // var convNums = parseInt(sorted)
  // input.sort(function (a, b) {  return a - b;  });
  var arr = []
  for (var i = 0; i < 5; i++) {
    arr.push(parseInt(sorted[i]))
  }
  return arr.reduce(function(a,b){
    return a * b
  })

}

console.log(productOfFive(numbers));
