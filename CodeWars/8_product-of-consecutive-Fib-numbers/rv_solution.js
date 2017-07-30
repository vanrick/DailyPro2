function fibonacci(num){
  let result = [0,1],
      max = num,
      index = 1,
      next = null
  do {
    index++
    console.log('ind-2 ',index-2);
    console.log('ind-1 ',index-1);
    next = result[index-2]+result[index-1]
    if (next <= max)
    console.log('next ',next);
    console.log('max ', max);
    result[index]=next
    console.log('next2 ',next);
  } while (next < max);
  console.log(result);
}

fibonacci(7)



















// var fibonacci_series = function (n)
// {
//   if (n===1){
//     return [0, 1];
//   }else{
//     var s = fibonacci_series(n - 1);
//     console.log(s);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };
//
// fibonacci_series(7)
