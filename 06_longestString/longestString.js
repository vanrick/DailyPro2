//https://github.com/gSchool/DailyProgrammer
//06 longestString

var stringys = ['truck','sidewalk','logan','speedtracks','kat']

function apples(input){
  var lengthz= 0
  var obj = {}
  for (var i = 0; i < input.length; i++) {
    if (lengthz < input[i].length) {
      lengthz=input[i].length
      obj = {}
      obj[input[i]] = input[i].length
    //  console.log(lengthz);
    }
  }
  console.log(obj);
  return obj
}

apples(stringys)
