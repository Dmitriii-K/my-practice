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
// =========================================================
// ****** Список пользователей ******
const list = document.querySelector("#list");
const filterInput = document.querySelector("#filter");
let USERS = [];

filterInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filterUsers = USERS.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  render(filterUsers);
}); // фильтруем пользователей по вводу в поле

async function start() {
  list.innerHTML = "Loading...";
  try {
    const resp = await fetch("URL"); // в URL вводим адрес и получаем промис(данные в шифре)
    const data = await resp.json(); // парсим полученные данные и получаем обычный JS массив данных
    setTimeout(() => {
      USERS = data;
      render(data); // запускаем функцию массива с пользователями
    }, 2000);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = err.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No matched users";
  } else {
    const html = users.map(toHTML).join(""); // join('')- убираем запятые после распоковки массива с данными
    list.innerHTML = html;
  }
} // создаем массив списка пользователей
function toHTML(user) {
  // выводит список пользователей с данными
  return `<li class="list-group-item">${user.name}</li>`;
} // функция вывода списка пользователей

start();
