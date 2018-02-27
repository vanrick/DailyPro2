function isAlt(word){
  let vowels = ['a','e','i','o','u'];
  let lastVowels = null
    for (var i = 0; i < word.length; i++) {
      let innerVowels = null
      if (vowels.indexOf(word[i])<0){
        innerVowels = false
      } else {
        innerVowels = true
      }
      if (lastVowels == innerVowels) {
        return false
      }
      lastVowels = innerVowels
    }
    return true
}

console.log(isAlt('ocean'));
