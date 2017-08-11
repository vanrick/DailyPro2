function diamond(n){
  if (n < 0 || n%2==0) return null
  let result = ''
  let till = Math.ceil(n/2)
  let s = spaces(n)
  for (var i = 0; i < till; i++) {
    if (i == 0) {
      result += "*"
      console.log(s+result);
    }else{
      result += "**"
      console.log(s + result);
    }
    s = s.slice(0,-1)
  }
  for (var i = 0; i < till-1; i++) {
    result = result.slice(0,-2)
    s += ' '
    console.log(s+result)
  }
}

function spaces(num){
  let result = ''
  for (var i = 0; i < Math.floor(num/2); i++) {
    result += ' '
  }
  return result
}
diamond(5)




















// function diamond(n){
//   if ( ! n || n < 3 || 0 === n % 2 ) {
//     return null;
//   }
//   var diam = '';
//   for ( var i = 1; i <= n; i += 2 ) {
//     diam += generateLine( i, n );
//     diam += '\n';
//   }
//   for ( var i = n - 2; i > 0; i -= 2 ) {
//     diam += generateLine( i, n );
//     diam += '\n';
//   }
//   return diam;
// }
// function generateLine( stars, length ) {
//   if ( stars > length ) {
//     return null;
//   }
//   var spaces = Math.floor( ( length - stars ) / 2 );
//   var line = '';
//   line += generateCharacters( ' ', spaces );
//   line += generateCharacters( '*', stars );
//   return line;
// }
// function generateCharacters( char, times ) {
//   var str = '';
//   for ( var i = 0; i < times; i++ ) {
//     str += char;
//   }
//   return str;
// }
// console.log( '\n' + diamond( 3 ) );
// console.log( '\n' + diamond( 5 ) );


// function diamond(n){
//   if (n<3 || n%2==0)
//     return null;
//
//   var str = '';
//   var middle = (n-1)/2;//i of the middle row
//
//   for (var i=0; i<=middle-1; ++i)
//   {
//     var spaces = ' '.repeat(middle-i);
//     str += spaces + '*'.repeat(i*2+1) + '\n';
//   }
//
//   str += '*'.repeat(n) + '\n';
//
//   for (var i=middle+1; i<n; ++i)
//   {
//     var spaces = ' '.repeat(i-middle);
//     str += spaces + '*'.repeat(n-(i-middle)*2) + '\n';
//   }
//
//   return str;
// }
