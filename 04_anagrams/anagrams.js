//https://github.com/gSchool/DailyProgrammer
//04 Anagrams

function anagrams(input1, input2){
  input1 = input1.split('').sort().join('')
  input2 = input2.split('').sort().join('')

  console.log('inp1 ', input1);
  console.log('inp2 ', input2);

    if (input1.length !== input2.length) {
      return false
    }else if(input1 !== input2){
      return false
    }else{
      return true
    }

}

console.log(anagrams('examples','pamesexl'))
