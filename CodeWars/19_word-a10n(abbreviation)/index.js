function abbreviate(str){
  let result = ''
  let tempWord = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      tempWord += str[i]
    } else {
      result += abbrev(tempWord)
      result += str[i]
      tempWord = ''
    }
  }
  return result
}

console.log(abbreviate('elephant-rides are really fun! yup...'));

function abbrev(str){
  let result = ''
    if (str.length > 3) {
      result+=str.slice(0,-(str.length-1))
      result+=str.slice(1,str.length-1).length
      result+=str.slice(str.length-1,str.length)
    }else {
      result += str
    }
  return result
}
