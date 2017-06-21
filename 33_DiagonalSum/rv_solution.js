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
    // bucket += num[i][i] + num[i][num.length - i -1]
    console.log(num[i][i])
    console.log(num[i][num.length - 1 - i]);
  }
  console.log('bucket: ',bucket);
  return bucket
}

sumz(diagonals)
