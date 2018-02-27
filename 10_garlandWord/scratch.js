let word = "oniOn";
let word2 = 'programmer';
let word3 = 'ceramic';
let word4 = 'alfalfa';
let word5 = 'couscous'

function garland(word) {
    word = word.toLowerCase();
    let degree = 0
    for (let i = 1; i < word.length; i++) {
        let front = word.slice(0, i)
        console.log(front);
        for (let j = 0; j <= i; j++) {
            let back = word.slice(-j)
            if (front === back && front.length > degree) {
                degree = front.length
            }
        }
    }
    console.log(degree);
    return degree
}
garland(word5)