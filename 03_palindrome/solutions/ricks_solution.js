var isPal = 'race car'
var isNot = 'lollipop'

function pal(input){
  input = input.replace(/\s/, '')
    if (input === input.split('').reverse().join('')) {
      console.log('true');
      return true
    }else{
      console.log('not true');
      return false
    }

}

pal(isPal)
