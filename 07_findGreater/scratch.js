let numArr = [1, 2, 3, 4, 5, 6, 7, 8]

function findGreater(numArr, num) {
    let result = []
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] > num) {
            result.push(numArr[i])
        }
    }
    return result
}

console.log(findGreater(numArr, 4));