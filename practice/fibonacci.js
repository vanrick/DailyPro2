// var fibonacci_series = function(n) {
//     if (n === 1) {
//         return [0, 1];
//     }
//     const s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
// };


// function fibonacci(num) {
//     if (num < 2) {
//         return num;
//     }
//     return fibonacci(num - 2) + fibonacci(num - 1);
// }

// console.log(fibonacci(7));

function fizzBuzz(num) {
  for (let i = 1; i < num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzBuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);
