let word = 'What is 5 plus 13?'
let word1 = 'What is 7 minus 5?'
let word2 = 'What is 6 multiplied by 4?'
let word3 = 'What is 25 divided by 5?'
let word4 = 'What is 4 times 3 divided by 6?'


function wordy(word){
  var array = word.toLowerCase().replace(/\bwhat|\bis|\bby\b|\?/g, '').split(' ');
  var newWord = array.toString().replace(/[, ]+/g, " ").trim()
  var newWord2 = newWord.split(' ')
  var newWord3 = newWord.split(' ')
  // console.log(newWord2);
  var result = []

  for (var i = 0; i < newWord2.length; i++) {
    // parseInt(newWord2[i])
    // console.log(parseInt('parse ',newWord2[i]));
    if (Number.isInteger(parseInt(newWord2[i])) === true) {
      console.log(Number(newWord2[i]));
      result.push(Number(newWord2[i]))
    }
  }
    // for (var i = 0; i < newWord3.length; i++) {
    //   parseInt(newWord3[i])
    //   if (newWord3[i] =='multiplied' || newWord3[i]=='times') {
    //     let a = result.pop()
    //     let b = result.pop()
    //     result.push(Number(a)*Number(b))
    //     console.log('a ',a);
    //     console.log('b ',b);
    //   }else if(newWord3[i]=='plus'){
    //     let a = result.pop()
    //     let b = result.pop()
    //     rresult.push(a+b)
    //   }else if(newWord3[i]=='minus'){
    //     let a = result.pop()
    //     let b = result.pop()
    //     result.push(a-b)
    //   }
    //   else if(newWord3[i]=='divided'){
    //     let a = result.pop()
    //     let b = result.pop()
    //     result.push(Number(a)/Number(b))
    //   }
    // }
let newResult = result.pop()
  console.log(result);
  return result
}
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 1);
console.log(citrus);
wordy(word4)
