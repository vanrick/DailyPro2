function findNb(m) {
  var sum = 0;
  var i = 1;
  while (sum <m) {
    sum = sum + Math.pow(i, 3);
    i++;
  }
  if (sum === m) {
    return (i-1);
  } else {
    return -1;
  }
}
console.log(findNb(1071225))
