//https://github.com/gSchool/DailyProgrammer
//01 countLetters
var stringy = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

function countLetters(input){
  input=input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split('')
 return input.reduce(function(results, letters, i){
   if(results[letters]){
     results[letters]++
   }else{
     results[letters]=1
   }
   console.log(results);
   return results
 },{})
}

countLetters(stringy);
