
function fizzyBuzzy(num){
      if (num==1) {
      console.log(1);
      return
      }
      if (num%3===0 && num%5===0) {
          console.log('fizzBuzz');
      }else if(num%3===0){
          console.log('fizz');
      }else if(num%5===0){
          console.log('buzz');
      }else{
          console.log(num);
      }
    fizzyBuzzy(num - 1)
}
fizzyBuzzy(21)
