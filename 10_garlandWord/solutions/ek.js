// Created by Elana Kopelevich

function garland(word){
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word.substr(0,i) === word.substr(-i)){
      count = i;
    }
  }
  console.log(word, count);
  return count;
}

module.exports = garland;
