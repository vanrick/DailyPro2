module.exports = function(matrix) {
  if (!(matrix instanceof Array) || !is2D(matrix)) {
    return;
  }
  return matrix.reduce(function(sum, array, i) {
    return sum + array[i] + array[array.length - (i + 1)];
  }, 0);
}

function is2D(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    if (!(matrix[i] instanceof Array) || matrix[i].length != matrix.length) {
      return false;
    }
  }
  return true;
}
