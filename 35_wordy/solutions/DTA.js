module.exports = function(question) {
  question = question.match(/-?\d+|(plus|minus|multiplied|times|divided)/g)
  if (!question) {
    return 42
  }
  var answer = parseInt(question[0])
  for (var i = 1; i < question.length; i++) {
    if (question[i] in calculations) {
      answer = calculations[question[i]](answer, parseInt(question[i + 1]))
    }
  }
  return answer
}

var calculations = {
  'plus': function(a, b) {
    return a + b
  },
  'minus': function(a, b) {
    return a - b
  },
  'multiplied': function(a, b) {
    return a * b
  },
  'times': function(a, b) {
    return a * b
  },
  'divided': function(a, b) {
    return a / b
  }
}
