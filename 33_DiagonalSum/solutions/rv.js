var diagonals = [[1,2,3],
                 [4,5,6],
                 [9,8,9]
                ]
      function happy(array){
        var bucket = 0
        array.forEach(function(par1,par2){
          bucket += par1[par2]
        })
        return bucket
      }
    // console.log(happy(diagonals))

    //  function reverseHappy(array){
    //    var bucket = 0
    //    array.forEach(function(element,index,array){
    //      bucket += element[array.length - index - 1]
    //    })
    //    return bucket
    //  }
  //  console.log(reverseHappy(diagonals))

//   const reverseHappy=(array)=>{
//     let bucket = 0
//     array.forEach((ele, index)=>{
//       bucket += ele[array.length - index - 1]
//     })
//     return bucket
//   }
// console.log(reverseHappy(diagonals));

const reverseHappy=(array)=>{
  return array.reduce((prev,curr,index)=>{
   return prev+curr[array.length - index - 1]
 },0)
}
console.log(reverseHappy(diagonals));

const array2 = [1,2,3]

const sumOfArray=(array)=>{
  return array.reduce((prev,curr)=>{
    return prev+curr
  },'')
}
console.log(sumOfArray(array2));
