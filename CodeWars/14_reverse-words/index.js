function reverseWords(str){
  let result = ''
  let s = ''
  let splitStr = str.split(' ')
  for (var i = 0; i < splitStr.length; i++) {
    result += splitStr[i].split('').reverse().join('') + ' '
    console.log(splitStr[i]);
  }
  console.log(result);
  return result
}

reverseWords("double  spaces with single and    quad")
