let array1 =
  [[ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]]

function diagonals(array){
  let result = 0
  for (var i = 0; i < array.length; i++) {
    result += array[i][i]+array[i][array.length-1-i]
  }
  console.log(result);
  return result
}

diagonals(array1)
