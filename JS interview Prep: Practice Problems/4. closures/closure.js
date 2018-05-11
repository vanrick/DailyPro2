var add = (function() {
    let counter = 0
    return () => { return counter++ }
})()

console.log(add());
console.log(add());
console.log(add());
console.log(add());