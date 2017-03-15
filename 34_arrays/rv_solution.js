var arr = [0, 3, 1, 4, 5, 80, 27, 58] //indexOf(6) //-1

function sortNumber(a,b) {
    return a - b;
}

function pramp(arr){
  numArray = arr.sort(sortNumber)
  let bucket = []
  let max = 0
  let min = 0
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i]> max) {
      max = numArray[i]
      // console.log(max);
    }else if(numArray[i]<min){
      min = numArray[i]
      // console.log(min);
    }
  }
  for (var i = min; i <= max; i++) {
    bucket.push(i)
  }
  // console.log(bucket);
  return bucket
}

pramp(arr)

//quad problem

var arr = [4,3,1,-5,7,8]
var arr2 = [2,9,2,0,8,-4]
var s = 8

function findSumOf(array, sum){

let bucket = []
  for (i in array){
    for (var j = i+1; j < array.length; j++) {
      for (var k = j+1; k < array.length; k++) {
        for (var l = k+1; l < array.length; l++) {
          if (array[i]+array[j]+array[k]+array[l] == sum) {
             bucket.push(array[i],array[j],array[k],array[l])
            // console.log([array[i],array[j],array[k],array[l]]);
          }
        }
      }
    }
  }
  console.log(bucket);
  return bucket
}

findSumOf(arr2,s)
