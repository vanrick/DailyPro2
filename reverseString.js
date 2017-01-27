var stringy = 'oh happy days!'

function reversy(input){
  // input.split('')
  var results ='';
  for (var i = input.length-1 ; i >= 0; i--) {
    results += input[i]
    //  console.log(input.length);
  }
  console.log(results)
  return results
}
reversy(stringy)
