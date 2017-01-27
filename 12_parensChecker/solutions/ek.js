module.exports = parensChecker;

function parensChecker(parens){
  var opens = 0;
  var closes = 0;
  var result;

  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      opens++;
    } else if (parens[i] === ')') {
      closes++;
    }

    if (parens[0] === '(' && parens[parens.length -1] === ')' && opens === closes){
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result);
  return result;
}
