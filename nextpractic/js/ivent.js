console.log("*** События и обработчики ***");
const button = document.querySelector("button");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.addEventListener(
    "click",
    (event) => {
      event.target.remove();
    },
    { once: false } // удаляется только один раз
  );
}); // При нажатии на кнопку она удаляется

button.addEventListener("click", (item) => {
  console.log("Hello"); // При нажатии на кнопку в консоли выскакивает сообщение "Hello"
});
