let findOdd = [2, 4, 0, 100, 4, 11, 2602, 36]
let findEven = [160, 3, 1719, 19, 11, 13, -21]


function findOutlier(integers){
  let even = []
  let odds = []
  integers.forEach((ele)=>{
    if (ele % 2 == 0) {
      even.push(ele)
    }else if (ele % 2 == 1) {
      odds.push(ele)
    }
  })
  if (even.length > odds.length) {
    return odds[0]
  }else {
    return even[0]
  }
}

console.log(findOutlier(findEven));
