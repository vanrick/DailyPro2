let sqr4 =
                [[1, 0, 0, 0],

                [0, 1, 0, 0],

                [0, 0, 1, 0],

                [0, 0, 0, 1]]

  var sqr5 =

               [[2, 5, 1, 3, 9],

                [4, 1, 3, 0, 8],

                [1, 0, 9, 7, 6],

                [1, 7, 7, 3, 0],

                [3, 3, 8, 2, 4]]

function sum(input){
  let bucket = 0
  for (var i = 0; i < input.length; i++) {
    console.log(input[i][i])
    bucket += input[i][i]
  }

  console.log('bucket: ',bucket);
  return bucket
}

// sum(sqr5)

//reverse

function revSum(input){
  let bucket=0
  for (var i = 0; i < input.length; i++) {
    console.log(input[i][input.length-i-1])
    bucket+=input[i][input.length-i-1]
  }
  console.log('bucket reverse: ',bucket);
  return bucket
}

revSum(sqr4)
