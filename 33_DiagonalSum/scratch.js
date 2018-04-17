let threeBythree = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function diagonals(array) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i][i]

        console.log(element);
        console.log(array[i][array.length - 1 - i]);
        result += element + array[i][array.length - 1 - i]
            // for (let j = array.length - 1; j >= 0; j--) {
            //     const element2 = array[j][j];
            //     console.log(element2);

        // }

    }
    console.log(result);
    return result
}
diagonals(threeBythree)