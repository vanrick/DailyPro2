let isPal = "A man, a plan, a canal, Panama!";
let isPal1 = "Amor, Roma";
let isPal2 = "No 'x' in Nixon"
let isNot = "alphabet A"

function palIdentifier(str){
  str = str.replace(/[.,\/#!$%?''\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '').toLowerCase().split('').join('')
  // console.log(str);
  if (str == str.split().reverse().join('')) {
    return true
  }
  return false
}

console.log(palIdentifier(isPal1))

// .replace(/[.,\/#!$%?''\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '')
