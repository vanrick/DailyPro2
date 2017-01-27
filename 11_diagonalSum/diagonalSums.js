//https://github.com/gSchool/DailyProgrammer
//11 diagonal sum

var four = [[1, 0, 0, 0],

           [0, 1, 0, 0],

           [0, 0, 1, 0],

           [0, 0, 0, 1]]

var five =[[2, 5, 1, 3, 9],

          [4, 1, 3, 0, 8],

          [1, 0, 9, 7, 6],

          [1, 7, 7, 3, 0],

          [3, 3, 8, 2, 4]]

function diagSum(arr){

   var sumz = 0
   for (var i = 0; i < arr.length; i++) {
    //  sumz+=(arr[i][i])
    console.log(arr[i][arr.length-1 - i]);
      // console.log(arr[0][0]);
      // console.log(arr[1][1]);
      // console.log(arr[2][2]);
      // console.log(arr[3][3]);
      // console.log(arr[4][4]);
      // console.log(arr[5][5]);
   }
  //  console.log(sumz);
  return sumz
}
// reverse diagonal
// arr[i][arr.length-1 - i]

diagSum(five)
