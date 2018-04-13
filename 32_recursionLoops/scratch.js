function fizzle(num) {
    if (num === 1) {
        console.log('1');
        return 1
    }
    if (num % 5 == 0 && num % 3 == 0) {
        console.log('fizzBuzz');
        fizzle(num - 1)
    } else if (num % 3 == 0) {
        console.log('fizz');
        fizzle(num - 1)
    } else if (num % 5 == 0) {
        console.log('buzz');
        fizzle(num - 1)
    } else {
        console.log(num);
        fizzle(num - 1)
    }
}
fizzle(100)