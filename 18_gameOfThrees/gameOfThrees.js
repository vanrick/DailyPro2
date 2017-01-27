//https://github.com/gSchool/DailyProgrammer
//18 game of threes

// function divideByThree(num){
//   var tracker = num;
//   while (tracker > 1){
//     console.log(tracker)
//     if(tracker%3 === 0){
//       console.log("0")
//       tracker /= 3
//     }else if((tracker-1)%3 === 0){
//       console.log("-1")
//       tracker = (tracker-1)/3
//     }else{
//       console.log("+1")
//       tracker = (tracker+1)/3
//     }
//   }
//   return tracker
// }

function gameofthrees(number){
 while(number>1){
   console.log(number);
   if (number%3==0) {
     console.log('0');
     number = number/3
   }else if((number-1)%3 ==0){
     console.log('-1');
     number = (number-1)/3
   }else{
     console.log('+1');
     number = (number+1)/3
   }
 }
 return number
}

gameofthrees(100)
