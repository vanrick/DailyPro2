'use strict'

what does using strict mode do to your code?

//
1. prevents the use of global variables
// ie city = 'london' without defining the variable

2. all pyramiders names must be unique

// ie 
var a = 1
function myFunc(a,a,b){
    a = 2
    b = 3
    console.log(a,a,b)
    // 2, 2, 3
}

3. fail fast and fail loudy

// let us know of the error before we build more code on top of the error

