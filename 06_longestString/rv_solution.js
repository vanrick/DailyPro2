var lon = ["truck", "sidewalk", "book", 'extra extra long']

function longest(array){
 let compare = 0
 let bucket = {}
 for (var i = 0; i < array.length; i++) {
  //  console.log(array[i]);
  //  console.log(array[i+1]);
   if (array[i].length > compare) {
    compare = array[i].length
    bucket = {}
    bucket[array[i]] = array[i].length
   }
 }
 // console.log(bucket);
 return bucket
}

console.log(longest(lon));
