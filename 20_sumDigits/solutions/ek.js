// Created by Elana Kopelevich

function sumDigits(num) {
  'use strict';
  var sum = 0;
  var str = num.toString();
  for (var i = 0; i < str.length; i++) {
    sum = sum + parseInt(str[i]);
  }
  if (sum.toString().length > 1) {
    sumDigits(sum);
  } else {
    console.log(sum);
    return sum;
  }
}

sumDigits(12345);
