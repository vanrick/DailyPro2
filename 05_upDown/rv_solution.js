var num = [6,3,5,4,3,4,4,5]
var str = 'Cheese Burgers!'

function upDown (num){
  if (Number.isInteger(Number(num.toString().split(',').join('')))) {
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
  }else{
    console.log('Please enter ONLY integers');
  }
  return bucket
}

console.log(upDown(str));
