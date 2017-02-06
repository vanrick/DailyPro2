var num = [6,3,5,4,3,4,4,5]

function upDown (num){
  var bucket = []
  for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] < num[i+1]) {
      bucket.push('up')
    }else if(num[i] > num[i+1]){
      bucket.push('down')
    }else if(num[i] == num[i+1]){
      bucket.push('even')
    }
  }
  return bucket
}

console.log(upDown(num));
