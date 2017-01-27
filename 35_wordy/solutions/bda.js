var operations = {
  'plus': (a, b) => a + b,
  'minus': (a, b) => a - b,
  'multiplied': (a, b) => a * b,
  'divided': (a, b) => a / b
};

function evalulate(array) {
  if (array.length == 3) {
    return operations[array[1]](array[0], array[2]);
  } else {
    var firstOperation = array.slice(0, 3), otherOperations = array.slice(3);
    return evalulate([evalulate(firstOperation)].concat(otherOperations));
  }
}

module.exports = function(string) {
  var args = string.replace(/\?/g, '').split(' ');

  args = args.filter(function(item) {
    return Number(item) || Number(item) === 0 || Object.keys(operations).indexOf(item) >= 0;
  });

  args = args.map(function(item) {
    return (Number(item) || Number(item) === 0) ? Number(item) : item;
  });

  return args.length > 0 ? evalulate(args) : 42;
};
