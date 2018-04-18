function array() {
    let newArray = {};
    newArray.length = 0
    newArray.push = function(val) {
        newArray[newArray.length] = val;
        newArray.length += 1
    }

    newArray.pop = function() {
        if (newArray.length > 0) {
            newArray.length -= 1
            var popArr = newArray[newArray.length];
            delete newArray[newArray.length]
        }
        return popArr
    }
    console.log(newArray);

    return newArray
}
let arr = array();
arr.push(100);
console.log(arr.length);
arr.push(10);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.pop());
console.log(arr.length);