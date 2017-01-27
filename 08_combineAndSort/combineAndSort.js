//https://github.com/gSchool/DailyProgrammer
//08 Combine and Sort

var arr1 = [ "cat", "dog", "fish", "zebra" ]
var arr2 = [ "lion", "aardvark", "gorilla" ]

function kitKat(input1, input2){
  var combine = arr1 + arr2
  var together = combine.split(',').sort()
  console.log(together);
  return together
}

kitKat(arr1, arr2)
