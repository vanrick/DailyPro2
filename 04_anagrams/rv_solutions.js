var word = 'examples1'
var ana = 'pameesxl1'
var anaLong = 'pameesxll'
var notAna = 'fagegf'
var num = 11234

function anie(word,ana){
  if (Number.isInteger(word) != true && Number.isInteger(ana) != true) {
    word = word.split('').sort().join('')
    ana = ana.split('').sort().join('')
    if (word.length !== ana.length || word !== ana) {
      return false
    }else{
      return true
    }
  }else{
    console.log('enter only strings');
    return false
  }
}

console.log(anie(word,ana));
console.log(anie(word,num));
