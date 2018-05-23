// const add = (function () {
//   let counter = 0;
//   return () => counter++;
// }());

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


function outerFunc(pups_name) {
  const x = 'if found please return ';

  function innerFunc(owners_name) {
    return `${x + owners_name} to ${pups_name}`;
  }
  return innerFunc;
}

const lostOwner = outerFunc('oscar');
lostOwner('rob');
console.log(lostOwner());
console.log(lostOwner('rob'));
