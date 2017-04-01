let word = 'What is 5 plus 13?'
let word1 = 'What is 7 minus 5?'
let word2 = 'What is 6 multiplied by 4?'
let word3 = 'What is 25 divided by 5?'
let word4 = 'What is 4 times 3 divided by 6?'
let word5 = 'What is 18 times 3 plus 16 minus 2?'


function wordy(word){
  var array = word.toLowerCase().replace(/\bwhat|\bis|\bby\b|\?/g, '').split(' ');
  var newWord = array.toString().replace(/[, ]+/g, " ").trim()
  var newWord2 = newWord.split(' ')

  var num = []
  var symbols = []
  var together = []

  for (var i = 0; i < newWord2.length; i++) {
    if (Number.isInteger(parseInt(newWord2[i])) === true) {
      num.push(Number(newWord2[i]))
    }
  }
    for (var i = 0; i < newWord2.length; i++) {
      parseInt(newWord2[i])
      if (newWord2[i] =='multiplied' || newWord2[i]=='times') {
        symbols.push('*')
      }else if(newWord2[i]=='plus'){
        symbols.push('+')
      }else if(newWord2[i]=='minus'){
        symbols.push('-')
      }else if(newWord2[i]=='divided'){
        symbols.push('/')
      }
    }
      for (var i = 0; i < num.length; i++) {
        together.push(num[i])
        if (symbols[i]) {
          together.push(symbols[i])
        }
      }
  console.log(eval(together.join(' ')));
  return eval(together.join(' '))
}

wordy(word5)
