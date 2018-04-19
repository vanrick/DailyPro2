function array() {
    let newArray = {};
    newArray.length = 0
    newArray.push = function(val) {
        newArray[newArray.length] = val;
        newArray.length++
    }
    newArray.pop = function() {
        if (newArray.length > 0) {
            newArray.length--
                let arr = newArray[newArray.length]
            delete newArray[newArray.length]
        }
        return arr
    }
    return newArray
}
array()
let arr = array()
console.log(arr.push);
arr.push('stuff')
console.log(arr);
arr.push('other stuff')
console.log(arr);
arr.pop()
console.log(arr);
console.log('x ', arr.pop());





// let arr = array();
// arr.push(100);
// console.log(arr.length);
// arr.push(10);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr.pop());
// console.log(arr.length);