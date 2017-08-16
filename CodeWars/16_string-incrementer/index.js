function incrementBy1(val){
  var splitNumOnly = val.match(/\d+/g);
  let splitStrOnly = val.match(/[a-zA-Z]+/g)
  let result = ''
  let strNum = ''
  let strStr = ''
  if (splitNumOnly !== null && splitStrOnly !== null) {
    strNum += splitNumOnly
    strStr += splitStrOnly
    result += Number(Number(splitNumOnly)+1)
  }else {
    return val + '1'
  }
  strNum = strNum.split('')
  let findZeros = ''
  strNum.forEach((ele)=>{
    if (result.length == strNum.length) {
      return strStr+result
    }else if (ele == '0') {
      findZeros += ele
    }
  })
  if (findZeros.length == 2 && result.length > 2) {
    return strStr+'0'+result
  }else if (findZeros.length == 1 && result.length > 3) {
    return result
  }
  return strStr+findZeros+result
}
console.log(incrementBy1('cat'));
