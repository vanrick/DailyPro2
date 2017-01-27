var str = 'Hello World'

function countLetters(input){
  input=input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split('')
  return input.reduce(function(results, letters){
    if (results[letters]) {
      results[letters]++
    }else{
      results[letters] = 1
    }
    console.log(results);
    return results
  },{})
}

countLetters(str)
