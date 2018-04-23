let word_problem = "What is 5 plus 13?";

let word_problem2 = 'What is 7 minus 5?'

let word_problem3 = 'What is 6 multiplied by 4?'

let word_problem4 = 'What is 25 divided by 5?'

let word_problem5 = 'What is 5 plus 13 plus 6?'

let word_problem6 = 'What is 7 minus 5 minus 1?'

let word_problem7 = 'What is 9 minus 3 plus 5?'

let word_problem8 = 'What is 3 plus 5 minus 8?'

let word_problem9 = 'What is 5 plus 13?'

let word_problem10 = 'What is 7 minus 5?'

let word_problem11 = 'What is 6 times 4?'

let word_problem12 = 'What is 25 divided by 5?'

let word_problem13 = 'What is 78 plus 5 minus 3?'

let word_problem14 = 'What is 18 times 3 plus 16?'

let word_problem15 = 'What is 4 times 3 divided by 6?'

let word_problem16 = 'What is 4 plus 3 times 2?'

function wordy(problem) {
    problem = problem.replace('?', '').split(' ');
    let word_stack = []
    for (let i = 0; i < problem.length; i++) {
        if (problem[i] == Number(problem[i])) {
            word_stack.push(problem[i])
        } else if (problem[i] == 'plus') {
            word_stack.push('+')
        } else if (problem[i] == 'times' || problem[i] == 'multiplied') {
            word_stack.push("*")
        } else if (problem[i] == 'minus' || problem[i] == 'subtracted') {
            word_stack.push("-")
        } else if (problem[i] == 'divided') {
            word_stack.push('/')
        }
    }
    console.log(eval(word_stack.join('')));
    return eval(word_stack.join(''))

}

console.log(wordy(word_problem));