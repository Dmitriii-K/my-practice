let grade1 = 5;
let grade2 = 4;
let grade3 = 3;
let grade4 = 5;
let grade5 = 4;
// console.log(grade1); // 5 - оценка за первый предмет
// console.log(grade3); // 3 - оценка за третий предмет
let grades = [5, 4, 3, 5, 4];
let extractedGrade = grades[4];
// console.log(extractedGrade);
// console.log(grades[1]);//----4
let book1 = "Война и мир";
let book2 = "Мастер и Маргарита";
let book3 = "Преступление и наказание";
// console.log(book2); //----"Мастер и Маргарита"

let person1 = { name: "Анна", surname: "Смирнова", birthYear: 1990 };
let person2 = { name: "Иван", surname: "Петров", birthYear: 1985 };
console.log(person2.name);

let persons = [
  { name: "Анна", surname: "Смирнова", birthYear: 1990 },
  { name: "Иван", surname: "Петров", birthYear: 1985 },
];
console.log(persons[0].surname);
console.log(persons[1].birthYear);

//------------------------------------------------------//
let shopingList1Item1 = "молоко";
let shopingList1Item2 = "хлеб";
let shopingList1Item3 = "яйца";

let shopingList2Item1 = "сок";
let shopingList2Item2 = "мороженое";

let shopingList3Item1 = "корм для кота";
let shopingList3Item2 = "шампунь";

console.log(shopingList1Item2); //-------хлеб------------

// let shopingLits = [
//   ["молоко", "хлеб", "яйца"],
//   ["сок", "мороженое"],
//   ["корм для кота", "шампунь"],
// ];
// console.log(shopingLits[1][0]); //---------сок---------

[1, 2, 3, 5, 7, {}, "", []].length; //------длинна массива 8-----

const massive = [1, 2, 3];
massive.push(10); // добавляет в конец массива элемент
console.log(massive);
massive.pop(); // удаляет последний элемент массива
console.log(massive);
console.log(massive.join(" ,")); // превращает элементы массива в строку
const massive2 = massive.slice(); // копирование массива
// const massive2 = [...massive]; // второй способ копирования массива
massive2.push(6);
console.log(massive, massive2);

console.log("*** объединение массивов ***");
const a = [1, 2, 4];
const b = [3, 5, 8];
const c = [1, 6, 7];
const sum = [...a, ...b, ...c, 23];
console.log(sum);
