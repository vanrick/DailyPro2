function fuzzySearch(searchStr) {
    let result = [];
    let arr = searchStr.toLowerCase()

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] !== 'z') {
            result.push(arr[i])
        } else {
            result.push('s')
        }
    }

    return 'Do you mean ' + result.join('') + "?"
}

fuzzySearch('Jesz');
console.log(fuzzySearch('Jesz'));