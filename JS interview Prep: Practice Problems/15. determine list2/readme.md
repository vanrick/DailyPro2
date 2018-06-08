1. first question
what is list2 when it is logged out?

2. follow - up question





How can we set list2 to equal the list1 without referencing it?


by copying the original array and assigning to list2


const list1 = [1, 2, 3, 4, 5];

const list2 = list1.slice();

list1.push(6, 7, 8);

console.log(list2);

