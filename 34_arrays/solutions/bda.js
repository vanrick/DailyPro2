function array() {
  this.length = 0;
}

array.prototype.toString = function() {
  return '[ ' + this.reduce(function(string, element, i, arr) {
    return string + String(element) + (i == arr.length - 1 ? '' : ', ');
  }, '') + ' ]';
}

array.prototype.push = function(item) {
  this[this.length++] = item;
};

array.prototype.pop = function() {
  var item = this[--this.length];
  delete this[this.length];
  this.length = Math.max(this.length, 0);
  return item;
};

array.prototype.indexOf = function(item) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == item) return i;
  }
  return -1;
};

array.prototype.forEach = function(method){
  for (var i = 0; i < this.length; i++) {
    method(this[i], i, this);
  }
};

array.prototype.reduce = function(method, initial) {
  if (arguments.length > 1) {
    var start = 0;
  } else {
    start = 1;
    initial = this[0];
  }
  for (var i = start; i < this.length; i++) {
    initial = method(initial, this[i], i, this);
  }
  return initial;
};

array.prototype.map = function(method) {
  var newArray = new array;
  for (var i = 0; i < this.length; i++) {
    newArray.push(method(this[i], i, this));
  }
  return newArray;
};

array.prototype.filter = function(method) {
  var newArray = new array;
  for (var i = 0; i < this.length; i++) {
    if (method(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

array.prototype.sort = function(method) {
  var i = 0;
  while (i < this.length - 1) {
    if (method(this[i], this[i + 1]) < 0) {
      var temp = this[i];
      this[i] = this[i + 1];
      this[i + 1] = temp;
      i = Math.max(i - 1, 0);
    } else {
      i ++;
    }
  }
  return this;
};

array.prototype.find = function(method) {
  for (var i = 0; i < this.length; i++) {
    if (method(this[i], i, this)) return this[i];
  }
};

array.prototype.reverse = function() {
  for (var i = 0; i < this.length / 2; i++) {
    var temp = this[i];
    this[i] = this[this.length - (i + 1)];
    this[this.length - (i + 1)] = temp;
  }
  return this;
};

array.prototype.from = function(arr) {
  var newArray = new array;
  arr.forEach((element) => newArray.push(element));
  return newArray;
};

array.prototype.every = function(method) {
  for (var i = 0; i < this.length; i++) {
    if (!method(this[i], i, this)) return false;
  }
  return true;
};

var testArray = new array;
testArray.push(1);
testArray.push(2);
testArray.push(3);
testArray.push(4);
testArray.push(5);
testArray.push(6);
testArray.push(7);
console.log('toString()');
console.log(testArray.toString());
console.log(testArray.pop());
console.log(testArray.toString());
console.log('indexOf()');
console.log(testArray.indexOf(7));
console.log(testArray.indexOf(6));
console.log('forEach()');
testArray.forEach((value) => console.log(value));
console.log('map()');
testArray = testArray.map((number) => number * 2);
console.log(testArray.toString());
console.log('reduce()');
console.log(testArray.reduce((all, each) => { return all + each; }, 0));
console.log('filter()');
testArray = testArray.filter((each) => each % 3 === 0);
console.log(testArray.toString());
console.log('sort()');
testArray.push(9);
testArray.sort((item1, item2) => item1 - item2);
console.log(testArray.toString());
console.log('reverse()');
testArray.reverse();
console.log(testArray.toString());
console.log('every()');
console.log(testArray.every((item) => item % 2 === 0));
