let string = 'heLlo wOrld'

function countLetters(string) {
    let allLowerCaseString = string.replace(/\s/g, '').toLowerCase().split('')
    console.log(allLowerCaseString);
    let result = {}
    allLowerCaseString.forEach(i => {
        if (result[i]) {
            result[i]++
        } else {
            result[i] = 1
        }
    });
    return result
}
console.log(countLetters(string));