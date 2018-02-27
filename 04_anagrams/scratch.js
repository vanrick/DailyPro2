let word = 'examples';
let arr = ["pameesxl", "woamxapl", "emaplsic"];
let word2 = 'apples'


function anaTest(word, arr) {
    let wordAphabetized = word.split('').sort().join()
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (wordAphabetized == arr[i].split('').sort().join()) {
            result.push(arr[i])
        }
    }
    if (result.length == 0) {
        console.log('false');
        return false
    } else {
        console.log(result);
        return result
    }
}

anaTest(word, arr)
anaTest(word, word2)