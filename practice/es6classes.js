class Rectangle{
  constructor(width, height){
      this.y=width
      this.x=height
  }
  area(){
    return this.y * this.x
  }
}

const rectangle1 = new Rectangle(10,2)

console.log(rectangle1);

const rectangle2 = new Rectangle(11,3)

console.log(rectangle2.area());
