var num = 1234;
var num2 = 1032;
var num3 = 1113;
var num4 = 1143;
var not = 'hello!';

function ramp(number){
      number = number.toString().split('')
      if (Number.isInteger(parseInt(number)) === true) {
        for (var i = 0; i < number.length-1; i++) {
          if (number[i] <= number[i+1]) {
              console.log('1st ',number[i]);
              console.log('2nd ',number[i+1]);
              console.log('Cool!');
           }else{
             return false
           }
          }
          return true
        }
      console.log('Please enter numbers');
    }

console.log(ramp(num4))
