function findNextSquare(num) {
    num = Math.sqrt(num);
    if (Number.isInteger(num)) {
        return Math.pow(num + 1, 2)
    } else {
        return -1
    }
}
console.log(findNextSquare(121));