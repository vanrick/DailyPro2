var fibonacci_series = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 // console.log(fibonacci_series(7));

function fibonacci(num){
  if (num < 2) {
    return num
  }else {
    return fibonacci(num-2)+fibonacci(num-1)
  }
}

 console.log(fibonacci(7));

 function reverseString(str){
   let result = ''
   for (var i = str.length-1; i >= 0; i--) {
    result += str[i]
   }
   return result
 }
 console.log(reverseString('hello'));
