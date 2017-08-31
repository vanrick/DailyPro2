let tablez = {}
function memoized(num){
  if (num in tablez) {
    console.log('exist');
    return tablez[num]
  }else {
    console.log('new');
    tablez[num] = fib(num)
    return fib(num)
  }
  console.log(tablez);
}
console.log(memoized(7));
console.log(memoized(8));
console.log(memoized(7));
console.log(memoized(8));
console.log(memoized(9));
console.log(memoized(2));
console.log(tablez);
function fib(num){if (num < 2) return num
else return fib(num-2)+fib(num-1)}
for (var i = 0; i < 5; i++) console.log(i)
