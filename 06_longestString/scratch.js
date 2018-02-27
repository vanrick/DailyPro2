let strArr = ["truck", "sidewalk", "book"];

function longestString(strArr) {
    let result = {}
    let temp = 0

    for (let i = 0; i < strArr.length - 1; i++) {
        let tempObj = {}
        if (strArr[i].length > temp) {
            temp = strArr[i].length
            console.log(temp);
            tempObj[strArr[i]] = strArr[i].length
            result = tempObj
        }

    }
    console.log(result);
    return result
}
longestString(strArr)