var numbers = {
        '1': {
            line1: '   ',
            line2: '  |',
            line3: '  |'
        },
        '2': {
            line1: ' __',
            line2: ' _|',
            line3: '|__'
        },
        '3': {
            line1: '__ ',
            line2: '__|',
            line3: '__|'
        },
        '4': {
            line1: '   ',
            line2: '|_|',
            line3: '  |'
        },
        '5': {
            line1: ' _ ',
            line2: '|_ ',
            line3: ' _|'
        },
        '6': {
            line1: ' _ ',
            line2: '|_ ',
            line3: '|_|'
        },
        '7': {
            line1: '__ ',
            line2: '  |',
            line3: '  |'
        },
        '8': {
            line1: ' _ ',
            line2: '|_|',
            line3: '|_|'
        },
        '9': {
            line1: ' _ ',
            line2: '|_|',
            line3: ' _|'
        },
        '0': {
            line1: ' _ ',
            line2: '| |',
            line3: '|_|'
        }
    }
    // console.log(numbers[0]);

function sevenSegment(num) {
    let stringNum = String(num).split('')
    let linez = {
        line1: '',
        line2: '',
        line3: ''
    }
    let keys = Object.keys(numbers)
        // console.log(stringNum);
    for (let i = 0; i < stringNum.length; i++) {
        const inside = stringNum[i];
        // console.log(inside);
        linez.line1 += numbers[stringNum[i]].line1 + ' ';
        linez.line2 += numbers[stringNum[i]].line2 + ' ';
        linez.line3 += numbers[stringNum[i]].line3 + ' ';
    }
    let logNum = ''
    for (const key in linez) {
        if (linez.hasOwnProperty(key)) {
            const element = linez[key];
            console.log(element);

        }
    }
    console.log(logNum);

    return logNum
}

sevenSegment(1000)