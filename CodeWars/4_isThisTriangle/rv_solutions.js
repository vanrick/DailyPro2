function isTriangle(a,b,c){
  if (a < 0 && b < 0 && c < 0) {
    return false
  }
  if (a == b && b == c) {
    return true
  }
   return false;
}

console.log(isTriangle(0,1,1));

console.log(Math.max(-1,2,4));
//answer found on reddit
// function isTriangle(a, b, c) {
//   let max = Math.max(a, b, c);
//   let sum = a + b + c;
//   return sum - max > max;
// }
