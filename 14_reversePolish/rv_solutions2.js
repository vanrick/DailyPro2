let pol1 = `5 1 2 + 4 × + 3 −`
let pol2 = `1 2 + 4 5 6 8 × − + +`

function calculatePolNotation(polishArray){
  polishArray = polishArray.split('')
  let result = []

  polishArray.forEach(function(array){

    if (Number.isInteger((parseInt(array))) == true) {
      result.push(Number(array))
    }else if (array == '+') {
      let a = result.pop()
      let b = result.pop()
      result.push(a+b)
    }else if (array == '×') {
      let a = result.pop()
      let b = result.pop()
      result.push(a*b)
    }else if (array == '−') {
      let a = result.pop()
      let b = result.pop()
      result.push(b-a)
    }
  })
  console.log(result);
  return result
}

// console.log(Number.isInteger((parseInt('5'))));
calculatePolNotation(pol1)
