function duplicateCount(text){
  let array = [];
  let dups = []
    text.toLowerCase().split('').forEach((ele)=>{
      if (array.indexOf(ele)<0) array.push(ele)
      else if (dups.indexOf(ele)<0) dups.push(ele)
    })
  return dups
}

console.log(duplicateCount('Indivisibilities'))
