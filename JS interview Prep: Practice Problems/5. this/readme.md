What is the "this" keyword in the JS langauge and how is it used?


'this' refers to whatever object it is directly inside of. 

//ie
var stuff = {
    watch: 10,
    baseball: 5,
    socks: 2,
    getTotalPrices: function(){
        return this.watch + this.baseball + this.socks
    }
}

console.log(stuff.getTotalPrices())

//returns 17