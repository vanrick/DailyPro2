function tri(){
  let hash = '#######'
  let hash2 = '#'
  for (var i = 0; i < 7; i++) {
    (i===0) ? console.log(hash2) : console.log(hash2+=hash[i]);
    }
}
tri()
