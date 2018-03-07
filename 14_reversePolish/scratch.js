let problem = `5 1 2 + 4 × + 3 −`
let problem2 = `1 2 + 4 5 6 8 * - + +`

function calculateRPN(problem) {
    problem = problem.replace(/\s/g, '')
    let result = []
    for (let i = 0; i < problem.length; i++) {
        if (Number(problem[i])) {
            result.push(problem[i])
        } else if (problem[i] === '+') {
            let a = result.pop()
            let b = result.pop()
            result.push(Number(a) + Number(b))
        } else if (problem[i] === '×' || problem[i] === '*') {
            let a = result.pop()
            let b = result.pop()
            result.push(Number(a) * Number(b))
        } else {
            let a = result.pop()
            let b = result.pop()
            result.push(Number(b) - Number(a))
        }

    }
    console.log(Number(result));
    return Number(result)
}

calculateRPN(problem2)