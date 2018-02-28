var square4 =

    [
        [1, 0, 0, 0],

        [0, 1, 0, 0],

        [0, 0, 1, 0],

        [0, 0, 0, 1]
    ]

var square5 =

    [
        [2, 5, 1, 3, 9],

        [4, 1, 3, 0, 8],

        [1, 0, 9, 7, 6],

        [1, 7, 7, 3, 0],

        [3, 3, 8, 2, 4]
    ]

function diagonalSum(sq) {
    let sum = 0;
    for (let i = 0; i < sq.length; i++) {
        console.log('first line: ', sq[i][i]);
        sum += sq[i][i]
    }
    console.log('sum: ', sum);

    return sum
}

diagonalSum(square5)