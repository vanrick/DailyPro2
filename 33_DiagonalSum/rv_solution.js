let diagonals =
( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] );

function sumz(num){
  // console.log(num);
  let bucket = 0
  for (var i = 0; i < num.length; i++) {
    console.log(num[i][i])
    console.log(num[num.length - i - 1][i]);
  }

  return bucket
}

sumz(diagonals)
