// Не рекомендуется изменять объект/переменные внутри функции. Необходимо создавать копию либо новй объект/переменные внутри функции, оставляя исходный объект без изменений( если это не требуется)- Чистая функция

console.log("*** Функции ***");
function calcSumBetween(num1, num2) {
  // параметры num1 и num2 являются параметрами функции
  let summ = 0;
  for (let i = num1; i < num2; i++) {
    summ += i;
  }
  console.log(summ);
}
let summ1 = calcSumBetween(4, 6); //- 9(4+5)
let summ2 = calcSumBetween(3, 7); //- 18(3+4+5+6)

console.log("*** Функция с несколькими return ***");
function checkParity(num) {
  if (num % 2 == 0) return "Четное";
  return "Нечетное";
}
console.log(checkParity(2));
console.log(checkParity(3));

console.log("*** Функция Function Declaration ***");
function showHelloUser(name) {
  console.log(`Hello, ${name}!`);
}
showHelloUser("Alex");

console.log("*** Функция Function Expression ***");
const showHelloUser2 = function (name) {
  console.log(`Hello, ${name}!`);
};
showHelloUser2("Marry");

console.log("*** Функция Arrow Function Expression ***"); // Стрелочная функция
const showHelloUser3 = (name) => console.log(`Hello, ${name}!`);
showHelloUser3("Peter");

const summ = (a, b) => a + b;
const res = summ(10, 20);
console.log(res);

console.log("*** CALBACK FUNCTION ***"); // функция, вызывающая внутри себя другую функцию
function getResult(expression, callback) {
  if (expression) callback();
}
function showTrueResult() {
  console.log(true);
}
getResult(2 > 1, showTrueResult);

console.log("*** Функции-конструкторы + this ***");
function User(name, id, age) {
  this.name = name;
  this.id = id;
  this.age = age;
  this.admin = false;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}
const igor = new User("Igor", 13, 18);
console.log(igor.hello());

console.log("*** Функции как аргумент ***");
// function summ(a, b) {
//   return a + b;
// }
function doSomething(func) {
  let x = 10;
  let y = 15;
  let result = func(x, y);
  console.log(result);
}
doSomething(summ);

console.log("*** Самовызывающаяся функция IIFE ***");
(function sayHi() {
  console.log(`Привет дорогой пользователь!`);
})();
(function summ(a, b) {
  console.log(a + b);
})(10, 15);

console.log("*** Data() ***");
const newPost = (post, addedAt = Date()) => ({
  // каждый раз при вызове addedAt будет присваиваться настоящая(реальная) дата
  ...post,
  addedAt,
});
const firstPost = {
  id: 1,
  author: "Dmitriy",
};
const trc = newPost(firstPost);
console.log(trc); // выводить объект с реальной датой
