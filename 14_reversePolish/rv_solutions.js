let num = '5 1 2 + 4 x + 3 -'

function polish(input){
  input = input.split(' ')

  let stack = []
  for (var i = 0; i < input.length; i++) {
   parseInt(input[i])
   console.log(parseInt(input[i]));
   if (Number.isInteger(parseInt(input[i])) === true) {
      console.log('first ',stack);
      stack.push(Number(input[i]))
    }else if(input[i] == '+'){
       let a = stack.pop()
       let b = stack.pop()
       stack.push(a + b)
       console.log('second ',stack);
    }else if(input[i] == 'x'){
       let a = stack.pop()
       let b = stack.pop()
       stack.push(a * b)
       console.log('third ',stack);
    }else if(input[i] == '-'){
       let a = stack.pop()
       let b = stack.pop()
       stack.push(b - a)
       console.log('fourth ',stack);
    }
  }
  console.log(stack);
  return stack
}

polish(num)
