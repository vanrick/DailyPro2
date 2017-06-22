function array() {
  var newArray = {}
  newArray.length = 0
  newArray.push = function (value) {
    newArray[newArray.length] = value
    newArray.length += 1
  }
  newArray.pop = function () {
    if (newArray.length > 0) {
      newArray.length -= 1
      var popValue = newArray[newArray.length]
      delete newArray[newArray.length]
    }
    return popValue
  }
  return newArray
}
