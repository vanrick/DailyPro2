function sortOdd(numArr){
  let oddSortedArray = []
  numArr.forEach((ele,key)=>{
    if (ele % 2 == 1)
    oddSortedArray.push(ele)
    oddSortedArray.sort(function(a, b){return a-b})
  })
  numArr.forEach((ele,key)=>{
    if (ele % 2 == 0) oddSortedArray.splice(key,0,ele)
  })
  return oddSortedArray
}

console.log(sortOdd([1, 11, 2, 8, 3, 4, 5]));











//online solutions
// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }
