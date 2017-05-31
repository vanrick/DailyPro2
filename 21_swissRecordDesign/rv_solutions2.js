let mathQ1 = "What is 5 minus 3 and 8 plus 2 divided by 3" //4
let mathQ2 = 'What is 10 minus 2 and 9 plus 3 divided by 4' // 5

function sentenceIntoMath(mathQuestion){
  let mathConversion = mathQuestion.replace(/\bwhat|is|b\S+/ig,"").replace(/\s+/g,' ').trim().split(' ')
  // console.log(mathConversion)
  let result = []
  let mathKey = {
    'minus': '-',
    'and': '+',
    'plus': '+',
    'divided': '/'
  }
  let result2 = 0
  for (var i = 0; i < mathConversion.length; i++) {
    if (Number.isInteger(Number(mathConversion[i])) == true) {
      result.push(Number(mathConversion[i]))
    }
    if (mathConversion[i] == 'minus') {
      result.push(mathConversion[i] - mathConversion[i+1])
    }else if (mathConversion[i] == 'plus' ||  mathConversion[i] == 'and') {
      result.push(Number(mathConversion[i]) + Number(mathConversion[i+1]))
    }else if (mathConversion[i] == 'divided') {
      result.push(Number(mathConversion[i]) / Number(mathConversion[i+1]))
    }else if (mathConversion[i] == 'multiply') {
      result.push(Number(mathConversion[i]) * Number(mathConversion[i+1]))
    }
 }
 console.log(result)
 return result
}

sentenceIntoMath(mathQ1)
