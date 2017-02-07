let num = [1,2,3,4,5,6,7,'burgers',8]
let singleNum = 5
let str = 'five'
let oStr = 'ten'


function findGreater(num, single){
  if (Number.isInteger(parseInt(num.toString().split(''))) == false || Number.isInteger(parseInt(single.toString().split(''))) == false){
    console.log('please enter both inputs as integers');
    return false
  }else{
    let bucket = []
    for (var i = 0; i < num.length; i++) {
      if (single < num[i]) {
        bucket.push(num[i])
      }
    }
    return bucket
  }
}

console.log(findGreater(num, 3));
