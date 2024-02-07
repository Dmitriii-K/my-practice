// =========Выбор коллекции элементов================

const headings = document.querySelectorAll("h2");
for (let heading of headings) {
  heading.classList.add("red-text");
}

const paragraphs = document.querySelectorAll("p");
for (const p of paragraphs) {
  p.classList.add("green-text");
}

paragraphs.forEach(function (item) {
  item.classList.add("green-text");
});

// // ================Работа с CSS классами================

/*
element.classList.add()
.add() Добавляет CSS класс
.remove() Удаляет класс
.toggle() Переключает класс
.contains() Возвращает true или false
*/

const heading = document.querySelector("h2");
heading.classList.add("red-text");

//===== Работа с атрибутами( картинки, логотипы, объекты страница)====================

/*
getAttribute(attrName) - возвращает значение указанного атрибута

setAttribute(name, value) - добавляет указанные атрибуты и его значение к элементу

hasAttribute(attrName) - возвращает true при наличии у элементов указанного атрибута

hasAttributes() - возвращает true если у элемента имеются какие-либо атрибуты

removeAttribute(attrName) - удаляет указанный атрибут

toggLeAttribute(name, force) - добавляет новый атрибут при отсуствии или удаляет существующий атрибут

getAttributesNames() - возвращает название атрибутов элемента 
*/

// ============= Работа с прослушкой событий =================
const button = document.querySelector("#button");
const img = document.querySelector("#logo");
button.value = "удалить";

button.addEventListener("click", function () {
  // удаляем картинку при нажатии на кнопку
  console.log("click");
  img.remove();
});
button.onclick = function () {
  // применяется только к одному действию
  console.log("Click!");
  img.remove();
};

const inputText = document.querySelector("#input-text");
const textBlock = document.querySelector("#text-block");

inputText.addEventListener("input", function () {
  console.log(inputText.value);
  textBlock.innerHTML = inputText.value;
});

// ============= Объект event ===============
const list = document.querySelector("#list");

list.addEventListener("click", function (event) {
  // console.log(this);
  console.log(event.target);
});

// ================ Работа с элементами =============

/*
document.createElement('tag-name') - Создание элементов

element.innerHTML = '' - изменить содержимое внутри элемента

node.innerText = '' - изменить текстовое содержание внутри элемента

node.cloneNode(true/false) - клонирование элемента. true(с внутренним содержанием), false(без внутреннего содержания)

element.append(nodesOrDOMStrings) - вставить элемент внутрь другого элемента

element.remuve() - удалить элемент
*/
const container = document.querySelector("#elementsContainer"); // выбор контейнера из HTML
const newHeader = document.createElement("h1"); // создание заголовка
newHeader.innerText = "Новый заголовок";
container.append(newHeader);

// =========== Вставка разметки через строки =============
const htmlExample = "<h2>Еще одни заголовок</h2>";
container.insertAdjacentHTML("beforeend", htmlExample);

// ============= ToDo список задач =====================
