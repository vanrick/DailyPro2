let num = 9
let num1 = 11


function gameOfThrees(num){
  let bucket = 0
  if (num % 3) {
    console.log('bucket 3', bucket);
    bucket += 0
  }else if(num % 2){
    console.log('bucket 2', bucket);
    bucket += 1
  }else if(num % 4){
    console.log('bucket 4', bucket);
    bucket -= 1
  }
  console.log(bucket);
  return bucket
}

gameOfThrees(num1)
