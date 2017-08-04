function tri(num){
  let array = ''
  let hash = '#'
  for (var i = 0; i < num; i++) {
    array += "#"
  }
  for (var i = 0; i < num; i++) {
    (i===0) ? console.log(hash) : console.log(hash+=array[i]);
  }
}
tri(5)
