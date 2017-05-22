function cntStr(str){
  str = str.replace(/\s/g, '').toLowerCase().split('');
  return str.reduce(function(accumulator, curr, index, array){
    if (accumulator[curr]) {
      accumulator[curr]++
    }else{
      accumulator[curr]=1
    }
    return accumulator
  },{})
}

console.log(cntStr('HeLlo WorLd!'));
