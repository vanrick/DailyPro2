function add(input1){
  return function (input2){
    return input1 + input2
  }
}

console.log(add(1)(2))

function add2(firstInput){
  return (secondInput)=>{
    return firstInput + secondInput
  }
}

console.log(add2(2)(3))
