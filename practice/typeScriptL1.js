//typeScript is a typed super set of JavaScript that compiles to plain JavaScript. JS is good for the browser end.
function Customer(){ //Customer() is a class
  this.CustomerName = '';
  this.CustomerCode = '';
  this.Validate = function(){ //this is a function
    alert('Validate')
  }
}

//typeScript
class Customer(){
  public CustomerName : string = ''; //have to define entity/var CustomerName then after the : the data type string
  Validate() : boolean{ //method or function, after : is the return type. inside Validate(value: integer)<< is input is can be a integer etc..
    alert('test')
    return true
  }
}

//typeScript Compiles to this JS code
// var Customer = (function(){ //closure and iffy
//   function Customer(){
//
//   }
//   return Customer;
// })

//for inheretence we need to use extends keyword
class SomeOtherCustomer extends Customer {
  Validate(){
    alert('this is a new customer')
  }
}
