let numArr = [6, 3, 5, 4, 3, 4, 4, 5, 0, 0]

function upDown(numArr) {
    let result = []
    for (let i = 0; i < numArr.length - 1; i++) {
        if (numArr[i] < numArr[i + 1]) {
            result.push('up')
        } else if (numArr[i] > numArr[i + 1]) {
            result.push('down')
        } else {
            result.push('even')
        }
    }
    console.log(result);
    return result
}

upDown(numArr)