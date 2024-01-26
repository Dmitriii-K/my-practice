// //-------Исходные данные
// const repeatCount = 3;
// //-------инициализация стартового значения
// let index = 1;
// //--------проверка
// if (index <= repeatCount) {
//   //-----целевое действие
//   document.write("a");
// }
// //--------инкриминируем индекс
// index = 2;
// //--------проверка
// if (index <= repeatCount) {
//   //----целевое действие
//   document.write("a");
// }
// index = 3;
// if (index <= repeatCount) {
//   document.write("a");
// }
// index = 4;
// if (index <= repeatCount) {
//   document.write("a");
// }
// index = 5;
// if (index <= repeatCount) {
//   document.write("a");
// }
//-------------------Упрощаем при помощи for---------
const repeatCount = 5;
for (let index = 1; index <= repeatCount; index++) {
  document.write("a");
}
document.write("<br>");

console.log("*** Цикл с предисловием while ***");
let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}

console.log("*** Цикл с послесловием do... while ***");
let m = 0;
do {
  console.log(m < 0);
  m++;
} while (m < 0);

console.log("*** Переход к следующей итерации- continue ***");
for (let i = 0; i < 8; i++) {
  if (i % 2 == 1) continue;
  console.log(i);
}

console.log("*** Прерывание цикла- break ***");
let s = 0;
while (s < 5) {
  if (s == 2) break;
  console.log(s);
  s++;
}

console.log("*** Использование меток в циклах ***");
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 3; j++) {
    if (j == 2) break outer;
    console.log(j);
  }
}

console.log("*** While ***");
let sum = +prompt("Укажите стартовую сумму", 1000);
const persent = 15;
const result = 2000;
let count = 0;
const depositTern = +prompt("укажите срок депозита", 10);

while (count < depositTern) {
  sum = sum + sum * (persent / 100);
  count = count + 1;
  document.write(count + ":" + sum + "<br>");
}
console.log(sum, count);
