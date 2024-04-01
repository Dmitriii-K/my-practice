"use strict";
const getCountry = function (countryName) {
  // Вызов AJAX для получения данных о стране
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`); // вводим необходимый url для получения данных
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); // полученные данные преобразуем
    console.log(data);
    // пишем дальнейший код внутри этой функции для выполнения его после загрузки с сервера первичной необходимой информации
  });
};
getCountry("belarus");
