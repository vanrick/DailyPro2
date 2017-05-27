let parTest = "()(((())))"
let parTest2 = "())))("
let parTest3 = ")("

function parensChecker(parentheses){
  let result = 0
for (var i = 0; i < parentheses.length; i++){
    if (parentheses[i] == '(') {
      result++
    }else if (parentheses[i]==')') {
      result--
    }
    if (result < 0) {
      return false
    }
  }
  return true
}

console.log(parensChecker(parTest));
