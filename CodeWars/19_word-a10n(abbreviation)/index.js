function abbreviate(str){
  let splitStr = str.split(' ')
  console.log(splitStr);
  let noNon = str.replace(/\W+/g, " ").trim().split(' ')
  let nonWordCharacters = []
  let indexers = []
  let result = ''

  for (var i = 0; i < noNon.length; i++) {

    if (noNon[i].length > 3) {
      result+=noNon[i].slice(0,-(noNon[i].length-1))
      result+=noNon[i].slice(1,noNon[i].length-1).length
      result+=noNon[i].slice(noNon[i].length-1,noNon[i].length) + ' '
    } else {
      result+= noNon[i] + ' '
    }
  }
  result = result.replace(/\s*$/,"");
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == '-' || splitStr[i] == ',') {
      indexers.push(i - 5)
    }else if (splitStr[i] == '!' || splitStr[i] == '?' || splitStr[i] == '.') {
      result += splitStr[i]
    }
  }
  for (var i = 0; i < indexers.length; i++) {
    result = result.trim().slice(0, indexers[i]) + "-" + result.slice(indexers[i]);
    result = result.replace(/\-\s/g,'-')
  }
  console.log(String(result));
}

abbreviate('elephant-rides are really fun!')
