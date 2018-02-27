var lon = ["truck", "sidewalk", "book", 'extra extra long']
var num = [1,2,3,4,5]
function longest(array){
  if (Number.isInteger(array) == true ) {
    let compare = 0
    let bucket = {}
    for (var i = 0; i < array.length; i++) {
      //  console.log(array[i]);
      //  console.log(array[i+1]);
      if (array[i].length > compare) {
        compare = array[i].length
        bucket = {}
        bucket[array[i]] = compare
      }
    }
    // console.log(bucket);
    return bucket
  }else{
    console.log('PLease enter only array of strings!');
    return false
  }
}

console.log(longest(num));
