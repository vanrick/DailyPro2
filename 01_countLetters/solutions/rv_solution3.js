var string = 'happy days'
var fox = "The quick brown 1 fox jumps over the lazy dog and the sleeping cat early in the day"
var int = 12345
var mix = "hey " + 1 + " no"

function cnt(string) {
    if (typeof string == 'string') {
        string = string.toLowerCase().replace(/[\s\d]/g, "").split('')
        var bucket = {}
        for (var i = 0; i < string.length; i++) {
            if (bucket[string[i]]) {
                bucket[string[i]]++
            } else {
                bucket[string[i]] = 1
            }
        }
        console.log(bucket);
        return bucket
    } else {
        console.log('no its not!');
        return 'no its not!'
    }

}
cnt(string)