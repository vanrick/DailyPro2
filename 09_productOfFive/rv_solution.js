let largest = 127289373913828309127381263;
let largest2 = 111333321

function findProduct (input){
  let bucket = []
  input = input.toString().split('').sort().reverse()
  // let input2 = input.sort().reverse()
  // console.log(input);
  for (var i = 0; i < 5; i++) {
    bucket.push(input[i])
  }
  return bucket.reduce(function(a,b){
    return a * b
  })
}

console.log(findProduct(largest2))
