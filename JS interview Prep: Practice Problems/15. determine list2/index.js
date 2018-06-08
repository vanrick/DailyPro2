const list1 = [1, 2, 3, 4, 5];
const list2 = list1;
list1.push(6, 7, 8);

console.log(list2);


// passing data by value
const myNum = 10;
const myString = 'Hello World';

// passing data by reference
// OBJ includes arrays
const otherList1 = [1, 2, 3, 4, 5];
const otherList2 = otherList1;
// it's the exact same array as otherList1, referencing


// question 2

let newList1 = [1, 2, 3, 4, 5];

const newList2 = newList1;

newList1 = [10, 20, 30];

console.log(newList2);
console.log(newList1);