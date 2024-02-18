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
