JSON.parse(); // конвертирует в объект
JSON.stringify(); // конвертирует объект в строку

const post = {
  title: "My post",
  likesQty: 5,
};
JSON.stringify(post); // выведет в качестве строки

const string = JSON.stringify(post);
JSON.parse(string); // вернет объект
