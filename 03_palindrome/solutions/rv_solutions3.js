var pal = 'Nurses Run'
var nonPal = 'chef alph'
var nonPal1 = 'CeFg gEfC'
var pal1 = 'race car'

function isPal(string){
  string=string.toLowerCase().replace(/\s/g, '').split('').join('')
  if (string == string.split('').reverse().join('')) {
    return true
  }else{
    return false
  }
}

console.log(isPal(pal1));
