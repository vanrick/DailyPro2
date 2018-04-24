function say(num) {
    let singleNumObj = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    }
    let teensNumObj = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Forteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen'
    }
    let tenthNumObj = {
        20: 'Twenty',
        30: 'Thirty',
        40: 'Forty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety',
    }
    let hundredthNumObj = {
        100: 'hundred'
    }
    let stringNum = String(num)
    let result = ''
    for (let i = 0; i < stringNum.length; i++) {
        if (stringNum.length == 3 && tenthNumObj[stringNum[1] + 0] && stringNum[2] !== '0') {
            console.log('1');

            result = singleNumObj[stringNum[0]] + '-' + hundredthNumObj[100] + ' and ' + tenthNumObj[stringNum[1] + 0] + '-' + singleNumObj[stringNum[2]]
        } else if (stringNum.length == 3 && tenthNumObj[stringNum[1] + 0]) {
            console.log('2');

            result = singleNumObj[stringNum[0]] + '-' + hundredthNumObj[100] + ' and ' + tenthNumObj[stringNum[1] + 0]
        } else if (stringNum.length == 3 && teensNumObj[stringNum[1] + stringNum[2]]) {
            console.log('3');

            result = singleNumObj[stringNum[0]] + '-' + hundredthNumObj[100] + ' and ' + teensNumObj[stringNum[1] + stringNum[2]]
        } else if (stringNum.length == 3) {
            console.log('4');

            result = singleNumObj[stringNum[0]] + '-' + hundredthNumObj[100]
        } else if (stringNum.length == 2 && teensNumObj[stringNum]) {
            console.log('5');

            result = teensNumObj[stringNum]
        } else if (stringNum.length == 2) {
            console.log('6');

            result = tenthNumObj[stringNum[0] + 0] + '-' + singleNumObj[stringNum[0]]
        }

    }
    console.log('result ', result);

    return result

}

say(201)