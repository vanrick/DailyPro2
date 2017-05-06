function Car(make, mileage){
  this.make = make;
  this.gas = 0;
  this.mileage = mileage || 0;
  this.isOn = false;
  this.paint = "gray";
}

Car.prototype.start = function (){
  this.isOn= true;
};

Car.prototype.refuel = function(){
  this.gas = 100;
}

let Toyota = new Car('Supra', '40,000', 'off');

console.log(Toyota);
Toyota.start();
console.log(Toyota);
Toyota.refuel();
console.log(Toyota);
