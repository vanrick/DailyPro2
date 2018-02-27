function isAnagram(word, mixword){
  let word1 = word.split('').sort().join('')
  // console.log('word1 ',word1);
  let word2 = mixword.split('').sort().join('')
  // console.log('word2 ', word2);
  if (word1 == word2) {
    return true
  }
  return false
}

console.log(isAnagram('examples','pmaeesxl'));
