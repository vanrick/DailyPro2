function gameOfThrees(num) {
    if (num === 1) {
        console.log('1');
        return 1
    }
    if ((num - 1) % 3 === 0) {
        console.log(num, ' -1');
        gameOfThrees((num - 1) / 3)
    } else if ((num + 1) % 3 === 0) {
        console.log(num, ' +1');
        gameOfThrees((num + 1) / 3)
    } else {
        console.log(num, ' 0');
        gameOfThrees(num / 3)
    }
}

gameOfThrees(100)