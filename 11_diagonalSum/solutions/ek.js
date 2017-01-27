// Created by Elana Kopelevich

function diagSum(square) {
  var sum = 0;
  for (var i = 0; i < square.length; i++) {
    sum = sum + square[i][i];
  }
  return sum;
}

module.exports = diagSum;
