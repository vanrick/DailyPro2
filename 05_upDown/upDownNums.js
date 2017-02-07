//https://github.com/gSchool/DailyProgrammer
//05 upDown

var nums = [6,3,5,4,3,4,4,5]
var str = 'extra long coney dog'

function numm(input){
  if (Number.isInteger(Number(input.split('').join(''))) == true) {
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
  }else{
    console.log('Please enter only integers');
    return false
  }
}

console.log(numm(str));
