let parens = "()(((())))"
let nonParens = "())))("
let nonParens2 = ')('
    // let something = 'help'

function parensChecker(string) {
    string = string.split('').join('')
    let bucket = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] === '(') {
            bucket++
        } else if (string[i] === ')') {
            bucket--
        }
        if (bucket < 0) {
            return false
        }
    }
    return bucket === 0
}

console.log(parensChecker(parens))