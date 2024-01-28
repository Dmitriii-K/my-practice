const body = document.querySelector("body");

const key = {
  item1: {
    width: "100px",
    height: "200px",
    backcolor: "#a8a8a8",
    text: "it is number one",
  },
  item2: {
    width: "200px",
    height: "300px",
    backcolor: "#eee",
    text: "it is number two",
  },
  item3: {
    width: "300px",
    height: "4200px",
    backcolor: "#acacac",
    text: "it is number three",
  },
};

for (key in elements) {
  key = elements[key];
  const div = document.createElement("div");
  div.style.cssText = `
    width: ${key.width};
    height: ${key.height};
    background-color: ${key.backcolor};
    `;
  div.innerHTML = `<h1>${key.text}</h1>`;
  body.append(div);
}
// Найти ошибку
