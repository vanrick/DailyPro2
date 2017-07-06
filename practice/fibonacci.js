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



function fibonacci(num){
  if (num < 2) {
    return num
  }else {
    return fibonacci(num-2)+fibonacci(num-1)
  }
}

 console.log(fibonacci(7));
