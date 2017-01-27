// Created by Elana Kopelevich

var input0 = 100;
var input1 = 31337357;

function gameOfThrees(input){
  var result = input;
  var diff;
  while (result !== 1) {
    if (result % 3 === 0) {
      diff = 0;
      console.log(result + ' ' + diff);
      result = result / 3;
    } else if (result % 3 === 1){
      diff = -1;
      console.log(result + ' ' + diff);
      result = (result - 1) / 3;
    } else if (result % 3 === 2){
      diff = 1;
      console.log(result + ' ' + diff);
      result = (result + 1) / 3;
    }
  }
  console.log(result);
}

// gameOfThrees(input0);
gameOfThrees(input1);
