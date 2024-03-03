JSON.parse(); // конвертирует в объект
JSON.stringify(); // конвертирует объект в строку

const post = {
  title: "My post",
  likesQty: 5,
};
JSON.stringify(post); // выведет в качестве строки

const string = JSON.stringify(post);
JSON.parse(string); // вернет объект
//=============================================================

const requestURL = ""; //  указываем адрес/ URL
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL); // получаем данные с URL
xhr.onload = () => {
  console.log(JSON.parse(xhr.response)); // распаковываем/загружаем данные
};
// xhr.responseType = 'json'; // тоже что и выше
xhr.send();
//===================================================================

function sendRequest(method, url, body = null) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
sendRequest("GET", requestURL)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const body = {
  name: "Dmitriy",
  age: 34,
};
