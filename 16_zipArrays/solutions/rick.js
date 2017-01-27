
// var hello = function(a1,a2){
//   // var a1 = [1,2,3];
//   // var a2 = [4,5,6];
//   var zipers = []
//   for (var i = 0; i < a1.length; i++) {
//     for (var j = 0; j < a2.length; j++) {
//       if (a1[i] == a1[0] && a2[j] == a2[0]) {
//         zipers.push(a1[i],a2[j])
//       }else if(a1[i] == a1[1] && a2[j] == a2[1]){
//         zipers.push(a1[i],a2[j])
//       }else if(a1[i] == a1[2] && a2[j] == a2[2]){
//         zipers.push(a1[i],a2[j])
//       }
//     }
//   }
//   return zipers
// }

var hello = (a1, a2)=> {
  var lengthy = a1.length <= a2.length ? a1 : a2
  return lengthy.reduce(function (results, item, i) {
    results.push(a1[i], a2[i]);
    console.log(results);
    return results;
  }, [])
}

var word = "helllllooo";

function getLetters(w) {
  
  w = w.split("");
  return w.reduce(function (results, letter, i) {
    // if the property (letter) exists on the object already
    // increase the value by one
    // else set it equal to 1
    // results[letter] = results[letter]+1 || 1

    if (results[letter]) {
      // console.log('top: ', i);
      results[letter]++
    }else{
      results[letter] = 1
    }
      console.log(results);
      return results
  }, {})
}
getLetters(word)

// {
//   'h': 1,
//   'e': 1,
//   'l': 1,
//   'o':1
// }

module.exports=hello
