var matrix = [
    [1, 64, 23],
    [22, 50, 2]
];
var matrix1 = [
    [44, 23],
    [21, 10],
    [9, 28],
    [85, 16],
    [33, 18]
];

function rotateMatrix(matrix) {
    let result = []
    for (let i = 0; i < matrix[0].length; i++) {
        let tempArr = []
        for (let j = matrix.length - 1; j >= 0; j--) {
            tempArr.push(matrix[j][i])
        }
        result.push(tempArr)
    }
    console.log(result);

    return result
}

rotateMatrix(matrix)