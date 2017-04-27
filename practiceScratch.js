//FizzBuzz Recursion
// function recurs(num){
//   if (num === 0) {
//     return 1
//   }
//   if (num % 3 == 0 & num % 5 == 0) {
//     console.log('FizzBuzz');
//   }else if(num % 3 == 0){
//     console.log('Fizz');
//   }else if(num % 5 == 0){
//     console.log('Buzz');
//   }else{
//     console.log(num);
//   }
//   return recurs(num-1)
// }
//
// recurs(100)

// Garland Word

let gWord = 'onion'
let gWord1 = 'onionionionionionionionionionion'
let gWord2 = 'alfalfa'
let gWord3 = 'programmer'
let gWord4 = 'ceramic'

function garland(word){
  word = word.split('').join('')
  let degree = 0
  for (var i = 1; i < word.length; i++) {
    let front = word.slice(0,i)
    // console.log('front: ',front);
    for (var j = 1; j <= i; j++) {
      console.log('back: ',word[j])
      let back = word.slice(-j)
      // if (front == back && front.length > 0) {
      //   degree = front.length
      // }
    }
  }
  // console.log('degree: ', degree);
  // return degree
}

garland(gWord3)

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(0,3);

console.log(citrus);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
