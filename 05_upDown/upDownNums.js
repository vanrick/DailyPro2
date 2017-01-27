//https://github.com/gSchool/DailyProgrammer
//05 upDown

var nums = [6,3,5,4,3,4,4,5]

function numm(input){
  var arr = []
  for (var i = 0; i < input.length; i++) {
    if (input[i]==input[i+1]) {
      arr.push('eves')


    }else if(input[i]>input[i+1]){
      arr.push('down')


    }else if(input[i]<input[i+1])
      arr.push('up')

  }
  return arr
}

console.log(numm(nums));
