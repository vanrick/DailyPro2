//https://github.com/gSchool/DailyProgrammer
//02 rampNumbers

var numbers = 1234
var nonNumbers = 1034
var test = 1123
var test2 = 1143
var num3 = 1113

function isRamped(num){
  var arr = num.toString().split('')
  for (var i = 0; i < arr.length-1; i++) {
    console.log(arr.length-1);
    if (arr[i] <= arr[i+1]) {
      console.log('1st ',arr[i]);
      console.log('2nd ',arr[i+1]);
      console.log("hi");
    }else{
      return false
    }
  }
  return true
}
console.log(isRamped(num3));
