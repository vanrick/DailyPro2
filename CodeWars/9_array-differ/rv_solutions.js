function subtracts_list(array,num){
  let subtractedArray = []
  array.forEach((ele) => {
    if (ele !== num[0])
    subtractedArray.push(ele)
  })
  return subtractedArray
}

console.log(subtracts_list([1,2,2,2,3],[2]));
