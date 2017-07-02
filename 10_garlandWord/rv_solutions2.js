function garland(str){
  let degree = 0
  str = str.toLowerCase()
  for (var i = 0; i < str.length; i++) {
   let front = str.slice(0,i);
   let back = str.slice(str.length-i, str.length);
   if (front === back) {
     degree = front.length
   }
  }
  return degree
}

console.log(garland('oniononionion'));
