
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
  '10': 'ten',
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
  '100': 'one hundred'
}

function singleNumber(single, singles){
  return singles[single]
}
function teenNumber(teen, teens){
  return teens[teen]
}
function tenNumber(ten, tens){
  return tens[ten]
}
function hundredNumber(hundred,hundreds){
  return hundreds[hundred]
}
function wordsToNumber(num){
  num = String(num).split('')
  for (var i = 0; i < num.length; i++) {
    if (num.length === 1) {
      console.log(singleNumber(num, singles));
      return singleNumber(num, singles)
    }else{

    }
  }
  return console.log("not");
}
wordsToNumber(10)
