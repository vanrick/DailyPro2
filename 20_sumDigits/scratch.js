function sumDigits(num) {
    let stringTheNum = String(num)
    let result = 0
    for (let i = 0; i < stringTheNum.length; i++) {
        result += Number(stringTheNum[i])
    }
    if (String(result).length > 1) {
        sumDigits(result)
    } else {
        return result
    }

}

console.log(sumDigits(12345));