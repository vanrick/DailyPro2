/* Created by David Adams March 1 2016 */
module.exports = function diagonalsSum(input) {
  console.log("*****I'm HERRREEEE*****");
  var tot = 0
  if(input.length == 1){
    tot += input[0] + input[0]
  }else{
    for (var i = 0; i < input.length; i++) {
      tot += input[i][i] + input[i][input[i].length-1-i]
    }
  }
  console.log(tot);
  return tot
}
