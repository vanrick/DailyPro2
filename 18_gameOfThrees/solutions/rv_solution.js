let num = 9
let num1 = 11


function gameOfThrees(num){
  let bucket = 0
  if (num % 3 == 0) {
    console.log('bucket 3', bucket);
    bucket = num + " " + 0
  }else if(num % 3 == 2){
    console.log('bucket 2', bucket);
    bucket = num + " " + 1
  }else if(num % 3 == 1){
    console.log('bucket 4', bucket);
    bucket = num + ' ' + '-1'
  }
  console.log(bucket);
  return bucket
}

gameOfThrees(100)
