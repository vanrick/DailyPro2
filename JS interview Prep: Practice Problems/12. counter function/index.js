function myFunc() {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
}

const aFunc = myFunc();
const bFunc = myFunc();
console.log(aFunc());
console.log(bFunc());
console.log(aFunc());
console.log(bFunc());
console.log(aFunc());
console.log(aFunc());
console.log(aFunc());
console.log(aFunc());
console.log(bFunc());
