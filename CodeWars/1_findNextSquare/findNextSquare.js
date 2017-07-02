
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  sq = Math.sqrt(sq)

  if (Number.isInteger(sq)) {
    return Math.pow(sq+1,2)
  }else {
    return -1;
  }
}

console.log(findNextSquare(9));
