function spinWords(str){
  let splitStr = str.split(' ');
  // console.log(splitStr);
  let result = ''
  for (var i = 0; i < splitStr.length; i++) {

    if (splitStr[i].length < 5) {
      result += splitStr[i] + ' '
    }else {
      result += splitStr[i].split('').reverse().join('') + ' '
    }
  }
  console.log(result);
  return result
}

spinWords("This is another test")
