const myCar = {
  color: 'Blue',
  logColor() {
    const self = this;
    console.log('In logColor - this.color: ', this.color);
    console.log('In logColor - self.color: ', self.color);
    (function () {
      console.log('In IIFE - this.color: ', this.color);
      console.log('in IIFE - self.color: ', self.color);
    }());
  },
};
myCar.logColor();
