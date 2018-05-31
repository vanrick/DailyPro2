What is the answers for these two console.logs?

(function(){
    var x = y = 200; //closure private variables
})();

console.log('y: ', y);
console.log ('x: ', x);

why?


y is defined as a global variable when you don't set it to var or let so you can access it from that outside.
y = 200;

x is function scoped so you don't have access to the variable.
var x = y;
