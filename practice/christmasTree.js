// create console log christmas tree using hash

function christmasTree(num) {
  let result = '';
  for (let i = 1; i < num; i++) {
    console.log('1st: ', result);

    for (let j = i; j < num; j++) {
      result += ' ';
      console.log('2nd: ', result);
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
      result += '#';
      console.log('3rd: ', result);
    }
    result += '\n';
    console.log('4th: ', result);
  }
  console.log(result);
  return result;
}

christmasTree(5);
