let problem = 'What is 5 plus 13?'

function wordy(input){
  input = input.toLowerCase().replace(/\bwhat|\bis|\bby\b|\?/g, '').trim().split(' ')
  let total = [];
  let symbols = [];
  let numbers = [];

  input.forEach(function(ele){
    if (Number.isInteger(Number(ele)) == true) {
      numbers.push(ele)
    }
    if(ele == 'multiplied' && ele == 'times'){
      symbols.push('*')
    }else if (ele == 'divided') {
      symbols.push('/')
    }else if (ele == 'plus') {
      symbols.push('+')
    }else if (ele == 'minus') {
      symbols.push('-')
    }
  })
  for (var i = 0; i < numbers.length; i++) {
    total.push(numbers[i])
    if (symbols[i]) {
      total.push(symbols[i])
    }
  }
  // console.log(numbers);
  // console.log(symbols);
  // console.log(total);
  return eval(total.join(' '))
}

console.log(wordy(problem))
