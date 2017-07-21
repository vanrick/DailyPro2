function divisors(integer) {
  let result = []
  let prime;
    for (var i = 2; i < integer; i++) {
      if (integer % i !== 0) {
        prime = integer + ' is prime'
      }else if (integer % i == 0) {
        result.push(integer/i)
      }
    }
  if (result.length > 0) {
    return result.reverse()
  }else {
    return prime
  }
}

console.log(divisors(12));

















// function divisors(integer) {
//     var divisors = [];
//
//     for (var i = integer - 1; i > 1; i--) {
//         if (integer % i == 0) {
//             divisors.push(i);
//         }
//     }
//
//     return divisors.length ? divisors.reverse() : (integer + ' is prime');
// }
//
// console.log(divisors(12));
