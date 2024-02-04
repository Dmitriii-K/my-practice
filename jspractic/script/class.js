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

class Person {
  constructor(name, age, speci, city) {
    this.name = name;
    this.age = age;
    this.speci = speci;
    this.city = city;
  }
  sayHi() {
    console.log(
      `Привет, меня зовут ${this.name}, мне ${this.age}, я ${this.speci} и живу в ${this.city}`
    );
  }
}
const petr = new Person("Петр", 28, "веб-разработчик", "Москва");
console.log(petr);
petr.sayHi();
