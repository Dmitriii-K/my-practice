const myPromise = new Promise((resolve, reject) => {
  // выполнение асинхронных действий. Внутри этой функции нужно в результате вызвать одну из функций resolve(выполнено) или reject(отклонено)
});
myPromise
  .then((value) => {
    // действие в случае успешного исполнения функции
  })
  .catch((error) => {
    // действие в случае отклонения Промиса
  });

const getData = (url) =>
  new Promise((resolve, reject) =>
    // создаем промис(обещание)
    fetch(url)
      .then((response) => response.json()) // получаем ответ от сервера
      .then((json) => resolve(json)) // возвращаем ответ функции
      .catch((error) => reject(error))
  );
getData("url") // указывем необходимый адрес(url)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

console.log("*** Request data... ***");
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
// sleep(2000).then(() => console.log("After 2 sec"));
// sleep(3000).then(() => console.log("After 3 sec"));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
}); // Выведет только после завершения всех массивов
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
}); // Выведет тответ после выполнения перого промиса
