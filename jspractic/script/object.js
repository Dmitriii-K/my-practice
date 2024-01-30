console.log("*** Доступ к свойствам объекта ***");
// console.log(user.name); // вызываем имя объекта
// console.log(user["age"]); // вызываем возраст объекта, можно и через точку
// присвоение параментра с двумя словами необходимо помещать в "" и выводить через []

// console.log("*** Перебор свойств объекта циклом for...in ***");
// for (let key in user) {
//   console.log(`${key} : ${user[key]}`);
// }

console.log("*** Методы объекта ***");
const cat = {
  name: "Kitty",
  "born year": 2019,
  seyHello: function () {
    console.log("Meow");
  },
};
cat.seyHello();

// Что бы в параментрах/свойствах объекта не указывать дополнительный путь к дополнительным параметрам/свойствам- указываем THIS для данного объекта

// МЕТОДЫ- это функции, записанные в свойствах объекта и совершающие с ним какое-либо действие

// МЕТОДЫ могут ссылаться на объект через ключевое слово THIS

console.log("*** Ключ объекта ***");
const object = {
  name: "Ivan",
  age: 18,
  hight: 180,
  weight: 70,
};
for (let key in object) {
  console.log(`Свойство ${key} имеет значение ${object[key]}`);
}

console.log("*** Все ключи объекта ***");
console.log(Object.keys(object).length);

console.log("*** Дестроктуризация ***");
const { name, age } = object;
console.log(name, age);

console.log("*** ООП ***");
const sedan = {
  color: "grey",
};
const bmw = {
  enginPower: 200,
};
const toyota = {
  enginPower: 120,
};
Object.setPrototypeOf(bmw, sedan);
console.log(bmw.color);

console.log("*** Методы в объектах ***");
let chevy = {
  make: "Chevy",
  model: "Aveo",
  year: 1955,
  color: "red",
  passengers: 4,
  convertible: false,
  mileage: 8000,
  started: false,
  fuel: 0,

  light: function () {
    // это не функция а МЕТОД
    console.log("Включен ближний свет");
  },
  start: function () {
    // свойство этого объекта
    if (this.fuel == 0) {
      alert("Бак пуст, заправьте его!");
    } else {
      this.started = true;
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert("Едем");
        this.fuel--;
      } else {
        alert("Нужно заправить автомобиль");
        this.stop();
      }
    } else {
      alert("Нужно завести автомобиль");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  },
};

chevy.start(); // Нужно заправить автомобиль
chevy.addFuel(2); // бензина на 2 поездки
chevy.start();
chevy.drive(); //"Едем"
chevy.drive(); //"Едем"
chevy.drive(); // Нужно заправить автомобиль
chevy.drive(); //"Нужно завести автомобиль"
chevy.drive();
//-----------------Скорректировать код------------
