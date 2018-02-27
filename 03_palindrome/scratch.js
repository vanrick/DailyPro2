let pWord1 = "A man, a plan, a canal, Panama!"
let pWord2 = "race car"
let pWord3 = "No 'x' in Nixon"
let nonPword = 'a word F,*&'

function paliTest(string) {
    let strippedStr = string.replace(/[^\w\s]|_/g, "").replace(/\s/g, '').toLowerCase();
    if (strippedStr.split('').reverse().join('') === strippedStr) return true
    return false
}

console.log(paliTest(nonPword));