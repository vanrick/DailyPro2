
function bob(question){
  let statement = ''
  question = question.split('')
  // console.log(question[question.length-1]);
  // console.log(question.join('').toLowerCase());
  if (question[question.length-1] === '?') {
    statement = 'Sure.'
  }else if (question[question.length-1] === '!' || question.join('') === question.join('').toUpperCase()) {
    statement = 'Whoa, chill out!'
  }else if (question === '') {
    statement = 'Fine. Be that way!'
  }else {
    statement = 'Whatever'
  }
  console.log(statement);
  return statement
}

bob('HEY')
