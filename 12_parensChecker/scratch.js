let parentheses = "()(((())))"
let parentheses2 = "())))("
let parentheses3 = ")("

function parensChecker(parentheses) {
    let result = 0
    for (let i = 0; i < parentheses.length; i++) {
        if (parentheses[i] == '(' || parentheses[0] === ')') {
            result -= 1
        } else {
            result += 1
        }
    }

    if (result < 0) return false

    return true
}

console.log(parensChecker(parentheses2));