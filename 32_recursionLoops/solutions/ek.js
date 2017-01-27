// Created by Elana Kopelevich

var i = 1;
var result;

function fizzbuzz(n){
  while (i < n) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      result = result + ' fizzbuzz';
      i++;
      fizzbuzz(n);
    } else if (i % 3 === 0) {
      result = result + ' fizz';
      i++;
      fizzbuzz(n);
    } else if (i % 5 === 0){
      result = result + ' buzz';
      i++;
      fizzbuzz(n);
    } else {
      result = result + ' ' + i;
      i++;
      fizzbuzz(n);
    }
  }
  if(i === n){
    console.log(result);
    return result;
  }
}

fizzbuzz(25);
