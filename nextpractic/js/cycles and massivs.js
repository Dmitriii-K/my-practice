const people = [
  { name: "Дмитрий", age: 25, budget: 40000 },
  { name: "Елена", age: 17, budget: 3400 },
  { name: "Игорь", age: 49, budget: 50000 },
  { name: "Михаил", age: 15, budget: 1800 },
  { name: "Василиса", age: 24, budget: 25000 },
  { name: "Ольга", age: 38, budget: 2300 },
];

console.log("************* For *******************");
for (let i = 0; i < people.length; i++) {
  const element = people[i];
  console.log(element);
}

console.log("************** For of ***************");
for (let person of people) {
  console.log(person);
}

console.log("*************** ForEach **************");
// people.forEach(function (person, index, pArr) {
//   // можно оставить для вывода один параметр
//   console.log(person);
// });
people.forEach((person) => console.log(person));

console.log("*************** Map ******************");
// преобразовывает текущий массив в полностью новый массив
const newPeople = people.map((person) => {
  return person.name; // позволяент возвращать любой элемент нового массива
});
console.log(newPeople);

console.log("*************** Filter ***************");
// Перебор массива и достаем необходимую информацию массива с помощью фильтра нового массива
// const adults = [];
// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }
// console.log(adults); // ПРИМЕР БЕХ МЕТОДА FILTR
const adults = people.filter((person) => person.age >= 18);
console.log(adults); // достает необходимую информацию и помещает в новый массив

console.log("**************** Reduce ***************");
// Пример через For
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
// console.log(amount);
const amount = people.reduce((total, person) => total + person.budget, 0); // 0- изменяемая начальная цифра суммы параментров
console.log(amount);

console.log("**************** Find *****************");
const dmitriy = people.find((person) => person.name === "Дмитрий");
console.log(dmitriy);

console.log("************** FindIndex ***************");
// Работает так же как метод Find но выводит Index

console.log("*** Совместная работа нескольких методов***");
const newPeople1 = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    };
  });
console.log(newPeople1);
