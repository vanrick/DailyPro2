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

function sevenSegment(num) {
    num = String(num).split('');
    var result = {
        line1: '',
        line2: '',
        line3: ''
    }
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        // console.log(element);
        result.line1 += numbers[element].line1 + ' '
        result.line2 += numbers[element].line2 + ' '
        result.line3 += numbers[element].line3 + ' '
    }
    // console.log(result);
    let logResult = ''
    for (var key in result) {
        logResult += result[key] + '\n'
    }
    console.log(logResult);
    return logResult
}


sevenSegment(100)