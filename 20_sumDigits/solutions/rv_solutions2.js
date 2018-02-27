// function sumToSingle(num){
//   do {
//     var stringNum = String(num);
//     let numToArr = stringNum.split('')
//     var num = 0
//     numToArr.forEach(function(key){
//       num += Number(key)
//     })
//   } while (stringNum.length > 1);
//
//   console.log(num);
//   return num
// }
//
// sumToSingle(12345)

function recurSums(num) {
  let result = 0
  num = String(num).split('');
  num.forEach(function(ele){
    result += Number(ele)
  })
  if (String(result).length > 1) {
    recurSums(result)
  }else{
    // console.log(result);
    return result
  }
}
recurSums(12345)
