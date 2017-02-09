let gWord = 'onion'
let gWord1 = 'onionionionionionionionionionion'
let gWord2 = 'alfalfa'
let gWord3 = 'programmer'

function garland(input){
input = input.split('').join('')
let degree = 0
  for (var i = 1; i < input.length; i++) {
    let front = input.slice(0,i)
    // console.log('front: ',front);
    for (var j = 1; j <= i ; j++) {
      let back = input.slice(-j)
      // console.log('back: ',back);
      if (front === back && front.length > degree) {
        console.log('front ', front);
        console.log('back: ', back);
        console.log('degree: ', degree);
        console.log('front length: ', front.length);
        degree = front.length
      }
    }
  }
  console.log(degree);
  return degree
}

garland(gWord1)
