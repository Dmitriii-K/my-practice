console.log("***Несколько условий if...else***");
const num = 10;
if (num < 10) {
  console.log("num < 10");
} else if (num == 10) {
  console.log("num == 10");
} else {
  console.log("num > 10");
}

console.log("***Несколько условий if...оперантов***");
console.log(num < 10 ? "num < 10" : num == 10 ? "num == 10" : "num > 10");

console.log("***Инструкция switch- группировка вариантов***");
const numCheck = 4;
switch (numCheck) {
  case 2:
  case 4:
  case 6:
  case 8:
    console.log("Четное!");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
    console.log("Нечетное!");
    break;
  default:
    console.log("Неизвестно!");
    break;
}

console.log("***Инструкция switch через if...else***");
if (numCheck == 2 || numCheck == 4 || numCheck == 6 || numCheck == 8) {
  console.log("Четное!");
} else if (numCheck == 1 || numCheck == 3 || numCheck == 5 || numCheck == 7) {
  console.log("Нечетное!");
} else {
  console.log("Неизвестно!");
}
