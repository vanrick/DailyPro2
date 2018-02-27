function pangram(str){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let splitStr = str.split('')
  for (var i = 0; i < splitStr.length; i++) {
    if (alphabet.indexOf(splitStr[i])===-1) {
      return false
    }else {
      return true
    }
  }
}
