// async function asyncFn() {
//   // Всегда возвращет Промис
// }
// const asyncFn = async () => {
//   // Всегда возвращает Промис
// };

const asyncFn5 = async () => {
  return "Success!"; // Вернет Промис и исполнит его с результатом строки 'Success!'
};
asyncFn5();

const asyncFn1 = async () => {
  throw new Error("There was an error!");
  // Вернет Промис и отклонит его с ошибкой
};
asyncFn1()
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

//------------ Асинхронные действия ----------------
const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000)); // Через 2 секунды исполним Промис

const asyncFn3 = async () => {
  // Асинхронная функция
  console.log("Timer srarts");
  await timerPromise(); // Ожидаем результата Промиса и только потом опускаемся ниже по функции
  console.log("Timer ended");
};
asyncFn3();

const getData = async (url) => {
  const res = await fetch(url); // Ждем возвращения от сервера информации и присваиваем ее переменной
  const json = await res.json(); // Вызываем метод json и ожидаем исполнение или отклонение и присваеваем перементой
  return json;
};
const url = ""; // Вподим адрес
try {
  // Обработка ошибок
  const data = await getData(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
