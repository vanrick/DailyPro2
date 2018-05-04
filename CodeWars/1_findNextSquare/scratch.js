function findNextSquare(num) {
    num = Math.sqrt(num);
    if (Number.isInteger(num)) {
        return Math.pow(sq + 1, 2)
    } else {
        return -1
    }
}