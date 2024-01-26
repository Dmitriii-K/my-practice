class Rectangle {
  constructor(height, wight) {
    this.height = height;
    this.wight = wight;
  }
  calcRectangle() {
    return this.height * this.wight;
  }
}
const square = new Rectangle(10, 10);
console.log(square.calcRectangle());
