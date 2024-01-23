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
