console.log(getProduct2(1, 2));
// console.log(getProduct(1, 2));

var getProduct = function(num1, num2) {
    return num1 + num2;
}

function getProduct2(num1, num2) {
    return num1 + num2
}


function getTotal() {
    console.log('var multiplier ', multiplier);
    console.log('let total: ', total);

    let total = 0

    for (let i = 0; i < 10; i++) {

        let valueToAdd = i;
        var multiplier = 2;
        total += valueToAdd * multiplier;
    }
    return total
}
getTotal()