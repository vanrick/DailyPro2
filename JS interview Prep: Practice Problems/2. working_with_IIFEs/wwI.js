(function() {
    const name = 'barry'
    console.log(name);

})()

// console.log('outside scope ', name);


// Assigning the IIFE to a variable does not store it but its result.
let result = (function() {
    const name = 'barry'
    return name
})()
console.log('result: ', result);

(function addSomething(num) {
    console.log('add ', num * 2);
    return num * 2
})(10) //noticed you can pass arguments in the invokation.
// i.e. same as addSomething(10)