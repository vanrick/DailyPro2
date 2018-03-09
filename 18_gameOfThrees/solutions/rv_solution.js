let num = 9
let num1 = 11


function gameOfThrees(num) {
    while (num > 1) {
        if (num % 3 == 0) {
            console.log('num 0', num, " ", 0);
            num = num / 3
        } else if ((num + 1) % 3 == 0) {
            console.log('num +1', num, ' ', 1);
            num = (num + 1) / 3
        } else if ((num - 1) % 3 == 0) {
            console.log('num -1', num, ' ', -1);
            num = (num - 1) / 3
        }
    }
    console.log(num);
    return num
}

gameOfThrees(100)