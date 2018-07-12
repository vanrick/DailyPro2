const obj = {
  key: 'value',
  key2: 'value2',
  getLength() {
    return this.length;
  },
};

// new keyword & Object constructor

const student = new Object();
student.gradePointAverage = 3.7;
student.classes = ['English', 'Algebra', 'Chemistry'];

student.getClasses = function () {
  return this.classes;
};


// constructor function

function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function () {
  return this.color;
};

const carlysCar = new Car('blue', 'ferrari', 2018);
const jimsCar = new Car('red', 'tesla', 2017);

console.log(carlysCar);
console.log(jimsCar);
