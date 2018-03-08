let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9, 10];

function zipArrays(arr1, arr2) {
    let result = []
    let arrayz;
    let extra = []
    if (arr1.length > arr2.length) {
        arrayz = arr1
        extra = arr1.splice(arr2.length, arr1.length)
    } else {
        arrayz = arr2
        extra = arr2.splice(arr1.length, arr2.length)
    }
    for (let i = 0; i < arrayz.length; i++) {
        result.push(arr1[i])
        result.push(arr2[i])
    }
    console.log(arrayz);

    return result.concat(extra)
}

console.log(zipArrays(arr1, arr3));