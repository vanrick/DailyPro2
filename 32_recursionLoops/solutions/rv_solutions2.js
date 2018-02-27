
function recursiveFizzBuzz(num){
  if (num == 1) {
    console.log(1);
    return
  }
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      console.log('fizzBuzz');
    }
  }else if (num % 3===0) {
    console.log('fizz');
  }else if (num % 5===0) {
    console.log('buzz');
  }else {
    console.log(num);
  }
  recursiveFizzBuzz(num - 1)
}

recursiveFizzBuzz(100)

function addOne(array) {
  function recursion(array, index) {
    // base case
    if (array.length == index) {
      return array
    }
    array[index]++
    return recursion(array, index + 1)
  }
  array = recursion(array, 0)
  return array
}

console.log(addOne([1,2,3,4]))
