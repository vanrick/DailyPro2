function add(input1){
  return function x(input2){
    return input1 + input2
  }
}

console.log(add(1)(2))
