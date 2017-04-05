
function numToEng(num){
  let english = 'yippy'
  if (num == 1) {
    english = 'one'
  }
  if (num == 2) {
    english = 'two'
  }else{
    console.log(null);
    return null
  }
  console.log(english);
  return english
}

numToEng(4)
