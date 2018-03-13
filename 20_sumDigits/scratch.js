function sumDigits(num) {
    let stringTheNum = String(num)
    if (stringTheNum.length == 1) {
        return num + ': number is already a single digit'
    }
    let result = 0
    for (let i = 0; i < stringTheNum.length; i++) {
        result += Number(stringTheNum)
    }
    if (String(result).length > 1) {
        sumDigits(result)
    } else {
        return result
    }

}

console.log(sumDigits(12));