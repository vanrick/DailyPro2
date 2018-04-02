function fuzzySearch(searchStr) {
    let result = [];
    let arr = searchStr.toLowerCase().split('').join()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('z') > 0) {
            result.slice(i, 1)
        } else {
            result.push(arr[i])
        }
    }
    console.log(result);

    return 'Do you mean ' + result + "?"
}

fuzzySearch('Jesz')