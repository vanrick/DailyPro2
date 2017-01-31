var string = 'happy days'
var fox = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day"
var int = 12345
function cnt(string){
  string=string.toLowerCase().replace(/\s/g, '').split('')
  var bucket = {}
    for (var i = 0; i < string.length; i++) {
      if (bucket[string[i]]) {
        bucket[string[i]]++
      }else{
        bucket[string[i]]=1
      }
    }

console.log(bucket);
return bucket
}
cnt(fox)
