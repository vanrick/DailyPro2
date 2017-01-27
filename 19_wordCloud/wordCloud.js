//word cloud
var words = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'

function wordCounts (input){
  input = input.toUpperCase().split(' ')
  return input.reduce(function(results, words, i){
    if(results[words]){
      results[words]++
    }else{
      results[words]=1
    }
    console.log(results);
    return results
  },{})

}

wordCounts(words)
