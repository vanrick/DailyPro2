function solution(digits){
  if (digits.length <= 5) return Number(digits);
  digits.split('').forEach((ele) => {
    // console.log(ele);
    // if (ele.substr(1)) {
    console.log(Math.max(Number(digits.substr(0, 5))))
    // }
  })
}
console.log(solution('82648598235192346'));






















// function solution(digits){
//   if (digits.length <= 5) return Number(digits);
//   debugger;
//   return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
// }
// console.log(solution('82648598235192346'));
