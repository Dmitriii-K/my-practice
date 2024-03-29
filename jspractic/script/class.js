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

console.log(" ********** Расширение других классов ********* ");

class NumbersArray extends Array {
  sum() {
    return this.reduce((el, acc) => (acc += el), 0); // проходимся по массиву методом
  }
}
const myArray = new NumbersArray(2, 5, 7);
console.log(myArray);
myArray.sum(); // сумма массива
const summ = myArray.sum();
console.log(summ);

console.log(" ********** Внесение изменений в параментры  ********* ");
class Animal {
  static type = "ANIMAL";
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }
  voice() {
    console.log("I am Animal");
  }
}
class Cat extends Animal {
  static type = "CAT";

  constructor(options) {
    // обращаемся к родительскому конструктору
    super(options);
    this.color = options.color;
  }
  voice() {
    super.voice(); // выводит родительское сообщение, а затем дочернее
    console.log("I am cat"); // перетираем родительское значение
  }
}

const cat = new Cat({
  name: "Cat",
  age: 7,
  color: "black", // будет присутствовать не смотря на отсуствие параметра в родительском объекте
  hasTail: true,
});
cat.voice();
