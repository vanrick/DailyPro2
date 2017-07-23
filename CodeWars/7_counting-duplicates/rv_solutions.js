function duplicateCount(text){
  text = text.toLowerCase().split('')
  let obj = null
  return text.reduce((accumulator,currentValue,index)=>{
    (accumulator[currentValue])?accumulator[currentValue]++:accumulator[currentValue]=1
      obj = accumulator
  },{})
  console.log(obj);
}

console.log(duplicateCount('Indivisibilities'))
