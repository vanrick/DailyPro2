function garland(str){
  let degree = 0
  for (var i = 1; i < str.length; i++) {
    let front = str.slice(0,i)
    let back = str.slice(-i)
    // for (var j = 1; j <= i; j++) {
    //   let back = str.slice(-j)
      if (front == back && front.length > degree) {
        degree = front.length
      }
    // }
  }
  return degree
}

console.log(garland('hotshots'));
