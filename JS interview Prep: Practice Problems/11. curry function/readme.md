Curry this function
function getProduct(num1, num2) {
  return num1 * num2;
}

getProduct(10, 20);

//curry functions are useful if you need to have one of the arguments as a variable and the other stays the same
i.e.
function getProduct(num1) {
  return num2 => num1 * num2;
}

let bananaPrice = getProduct(2.00)

console.log(bananaPrice(5));
// 5*2.00 = 10.00
