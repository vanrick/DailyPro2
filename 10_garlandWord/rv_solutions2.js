function garland(word){
  let degree = 0
  word = word.toLowerCase().split('').join('')
  console.log(word);
  for (var i = 1; i < word.length; i++) {
    let front = word.slice(0,i)
    // console.log(front);
    let back = word.slice(word.length-i, word.length)
 }
  return degree
}


garland('onion')
