//https://github.com/gSchool/DailyProgrammer
//03 palidrome

var palidrome = 'nurses run'
var nonPali = 'cat in hat'

function isPali(input){
 input = input.replace(/\s/, '')
 if(input === input.split('').reverse().join('')){
   return true
 }else{
   return false
 }
}

console.log('T : ',isPali(palidrome));
console.log('F : ',isPali(nonPali));
