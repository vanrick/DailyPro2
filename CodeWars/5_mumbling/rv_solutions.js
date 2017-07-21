function accum(s) {
	let result = '';
  let x;
  for (var i = 0; i < s.length; i++) {
    x = s[i].toLowerCase();
    // console.log(x);
    for (var j = 0; j <= i; j++) {
      console.log('j ',j);
      console.log('i ',i);
      if (j === 0) {
        result+=x.toUpperCase()
      }else {
        result+=x
      }
    }
    if (i < s.length-1) {
      console.log('bottom i ',i);
      console.log('slength-1 ', s.length-1);
      result += '-';
    }
  }
  return result
}

console.log(accum('RqaEzty'))
