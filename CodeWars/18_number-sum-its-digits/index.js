function sumDigPow(a,b){
  let result = []
  for (var i = a; i < b; i++) {
    if (checker(i)) {
      result.push(i)
    }
  }
  return result
}
console.log(sumDigPow(90,100));
function checker(num){
  let splitStr = String(num).split('')
  let result = 0;
  for (var i = 0; i < splitStr.length; i++) {
    result += Math.pow(splitStr[i],i+1)
  }
  if (result == num) {
    return true
  }else {
    return false
  }
}
