
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
  '18': 'eighteen',
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
let thousands = {
  '1000': 'one thousand'
}
function reversy(num){
  return String(num).split('').reverse().join('')
}
function three(num){
  num = String(num)
  if (num.length === 3 && num[1] == '0' && num[2] == '0'){
    console.log(hundreds[num]);
    return hundreds[num]
  }else if(num[1] == '0'){
    console.log(hundreds[num[0]+'0'+'0']+' and '+singles[num[2]]);
    return hundreds[num[0]+'0'+'0']+' and '+singles[num[2]]
  }else if(num[2] == '0'){
    console.log(hundreds[num[0]+'0'+'0']+' and '+tens[num[1]+'0'])
    return hundreds[num[0]+'0'+'0']+' and '+tens[num[1]+'0']
  }else{
    console.log(hundreds[num[0]+'0'+'0']+' and '+tens[num[1]+'0']+singles[num[2]]);
    return hundreds[num[0]+'0'+'0']+' and '+tens[num[0]+'0']+singles[num[2]]
  }
}

function numToEng(num){
  num = String(num)
  if (num == '1000') {
    console.log(thousands[num]);
    return thousands[num]
  }
  if (num.length == 4) {
    return console.log('nah');
  }
  if (num.length > 4) {
    return console.log('hell nah');
  }
  if (num.length == 3) {
    return three(num)
  }
  if (num.length < 2) {
    console.log(singles[num[0]]);
    return singles[num[0]]
  }else if(teens[num]){
    console.log(teens[num]);
    return teens[num]
  }else if(num[1] === '0'){
    console.log(tens[num]);
    return tens[num]
  }else{
    let twoNums = tens[num[0]+'0']+singles[num[1]]
    console.log(twoNums);
    return twoNums
  }
  return console.log('please enter a number between 0 - 1000');
}
numToEng(980)
