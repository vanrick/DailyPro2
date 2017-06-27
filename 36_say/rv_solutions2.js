let singles = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
}
let teens = {
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eightteen',
  '19': 'nineteen'
}
let tens ={
  '10': 'ten',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety'
}
let hundreds = {
  '100': 'one hundred',
  '200': 'two hundred',
  '300': 'three hundred',
  '400': 'four hundred',
  '500': 'five hundred',
  '600': 'six hundred',
  '700': 'seven hundred',
  '800': 'eight hundred',
  '900': 'nine hundred',
}

function say(num){
  let wordedNumbers = ''
  num = String(num).split('');
  if (num.length < 2) {
    wordedNumbers = singles[num]
  }else if (teens[num.join('')]) {
    wordedNumbers = teens[num.join('')]
  }else if (tens[num.join('')]) {
    wordedNumbers = tens[num.join('')]
  }else if (hundreds[num.join('')]) {
    wordedNumbers = hundreds[num.join('')]
  }
  for (var i = 0; i < num.length; i++) {
    if (num.length==2 && tens[num[0]+num[1]]) {
      wordedNumbers = tens[num[0]+num[1]]
    }else if (num.length==2 && tens[num[0]+'0'] && singles[num[1]]) {
      wordedNumbers = tens[num[0]+'0']+'-'+singles[num[1]]
    }else if (num.length==3 && hundreds[num[0]+'0'+'0'] && singles[num[2]]) {
      wordedNumbers = hundreds[num[0]+'0'+'0'] +' and '+singles[num[2]]
    }
  }


  console.log(wordedNumbers);
  return wordedNumbers
}

say(122)
