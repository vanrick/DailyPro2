
function bob(question){
  let statement = ''
  question = question.split('')
  // console.log(question);
  if (question[question.length-1] === '?') {
    statement = 'Sure.'
  }else if (question[question.length-1] === '!') {
    statement = 'Whoa, chill out!'
  }else if (question.join().trim() === '') {
    statement = 'Fine. Be that way!'
  }else {
    statement = 'Whatever'
  }
  console.log(statement);
  return statement
}

bob(' ')
