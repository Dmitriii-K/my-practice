"use strict";
const request = fetch("https://restcountries.com/v3.1/name/belarus");
console.log(request);

const getCountryData = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => alert(e)); // отлавливаем ошибки
};
getCountryData("belarus");
