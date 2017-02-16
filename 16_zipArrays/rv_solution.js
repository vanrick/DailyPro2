let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9,10,11]

function arrZip(a1,a2){
  let bucket=[]
  let extra = []
  if (a1.length < a2.length) {
    extra = a2.splice(a1.length, a2.length)
  }else if(a2.length < a1.length){
    extra = a1.splice(a2.length, a1.length)
  }
  for (var i = 0; i < a1.length; i++) {
    bucket.push(a1[i])
    bucket.push(a2[i])
  }
  console.log(bucket.concat(extra));
  return bucket.concat(extra)
}

arrZip(arr2,arr3)
