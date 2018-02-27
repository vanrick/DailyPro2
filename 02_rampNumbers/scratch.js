let risingNum = [1, 2, 3, 4, 5, 6]
let nonRisingNum = [1, 2, 3, 4, 5, 2]
let nonRisingNum2 = [1, 2, 3, 4, 4, 5, 2]

function rampFinder(numArray) {
    let bucket = []
    for (let i = 0; i < numArray.length - 1; i++) {
        const num = numArray[i];
        // console.log('we here');
        console.log(numArray[i]);

        if (numArray[i] <= numArray[i + 1]) {

        }
        return false

    }
    return true
}
console.log(rampFinder(risingNum));
console.log(rampFinder(nonRisingNum));
console.log(rampFinder(nonRisingNum2));