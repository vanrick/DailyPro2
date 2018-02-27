let isRamp = 1234;
let isRamp2= 1124;
let isNot = 1032;
var num4 = 1143

function rampIdentifier(num){
  num = String(num).split('')
  for (var i = 0; i < num.length-1; i++) {
    if (num[i] > num[i+1]) {
    return false
    }
  }
  return true
}
console.log(rampIdentifier(isNot));
