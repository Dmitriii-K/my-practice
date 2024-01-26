console.log("*** Функции ***");
function calcSumBetween(num1, num2) {
  // параметры num1 и num2 являются параметрами функции
  let sum = 0;
  for (let i = num1; i < num2; i++) {
    sum += i;
  }
  console.log(sum);
}
let sum1 = calcSumBetween(4, 6); //- 9(4+5)
let sum2 = calcSumBetween(3, 7); //- 18(3+4+5+6)

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

console.log("*** CALBACK FUNCTION ***");
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
