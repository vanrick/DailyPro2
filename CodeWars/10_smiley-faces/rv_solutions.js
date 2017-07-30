function isItSmiley(arrayOfSmiles){
  let eyes = [':',';']
  let nose = ['-','~']
  let mouth = [')','D']
  let smileyCount = [];
  for (var i = 0; i < arrayOfSmiles.length; i++) {
    let check = arrayOfSmiles[i].split('')
    if (check.indexOf(eyes[i])>-1 && check.indexOf(mouth[i])>-1) {
      smileyCount.push(check)
    }
    // for (var j = 0; j < 2; j++) {
    // }
  }
  // arrayOfSmiles.forEach((ele) => {
  //   console.log(ele.split(''));
  //   console.log(ele.split('').indexOf(eyes[0])>-1);
  //   if (ele.split('').indexOf(':')>-1) smileyCount.push(ele)
  // })
  return smileyCount
}
console.log(isItSmiley([';D', ':-(', ':-)', ';~)']));
