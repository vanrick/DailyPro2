module.exports = {
  inEnglish: function(value) {
    if (value < 0 || value > 999999999999) {
      return 'Number must be between 0 and 999,999,999,999.'
    }
    if (value === 0) {
      return 'zero'
    }
    value = value.toString().reverse()
    var result = ''
    for (var i = 0; i < Math.ceil(value.length / 3); i++) {
      var hundredsResult = hundredsToEnglish(value.substr(i * 3,3))
      result = hundredsResult.length != 0
              ? hundredsResult + placeholders[i] + result : result
    }
    return result.trim()
  }
}

function hundredsToEnglish(value) {
  if (value.length < 3) {
    return tensToEnglish(value)
  } else if (value[2] === '0') {
    return tensToEnglish(value.substr(0,2))
  } else if (value[0] === '0' && value[1] === '0') {
    return numbers[value[2]] + ' hundred'
  } else {
    return numbers[value[2]] + ' hundred ' + tensToEnglish(value.substr(0,2))
  }
}

function tensToEnglish(value) {
  if (value.length < 2) {
    return numbers[value[0]]
  } else if (value[1] === '0') {
    return numbers[value[0]]
  } else if (value.reverse() in numbers) {
    return numbers[value.reverse()]
  } else {
    return numbers[value[1] + '0'] + '-' + numbers[value[0]]
  }
}

placeholders = {
  '0': '',
  '1': ' thousand ',
  '2': ' million ',
  '3': ' billion ',
  '4': ' trillion '
}

numbers = {
  '0': '',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety'
}

String.prototype.reverse = function () {
  return this.split("").reverse().join("")
}
