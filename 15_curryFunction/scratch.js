function add(a) {
    return (b) => { return a + b }
}
console.log(add(3)(1));