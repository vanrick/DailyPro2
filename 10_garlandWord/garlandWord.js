//https://github.com/gSchool/DailyProgrammer
//10 Garland Word

// garland('programmer') //0
// garland('ceramic') //1
// garland('onion') //2
// garland('alfalfa') //4
// garland('hotshots') //4
// garland('abracadabra') //4
// garland('couscous') //4

// function garland (word) {
//     var degree = 0;
//     for (var i = 1; i < word.length; i++) {
//         var front = word.slice(0, i);
//         console.log('front: ',front);
//         for (var j = 1; j <= i; j++) {
//             var back = word.slice(-j);
//             console.log('back: ',back);
//             if (front === back && front.length > degree) {
//                 degree = front.length;
//             }
//         }
//     }
//     console.log(degree);
//     return degree;
// }
//
// garland('programmer')

function garland(input){
  for (var i = input.length-1; i >-1; i--) {
    if (input.substring(input.length-i)===input.substring(0,i)) {
      console.log(i);
      return i
    }
  }
}

garland('alfalfa')
