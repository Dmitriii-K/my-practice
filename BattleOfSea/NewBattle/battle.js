const view = {
  displayMessage: function (msg) {
    let messageArea = document.querySelector("#messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function (location) {
    let cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  },
};
// view.displayMessage("Some message..");
// view.displayHit("35");
// view.displayMiss("23");

// Модель поведения
let model = {
  bordSize: 7, // размер игрового поля
  numShips: 3, // кол-во кораблей в игре
  shipLength: 3, // длинна корабля в клетках
  shipsSunk: 0, // кол-во потопленных кораблей на начало игры

  ships: [
    (ship1 = { location: ["10", "20", "30"], hits: ["", "", ""] }),
    (ship2 = { location: ["32", "33", "34"], hits: ["", "", ""] }),
    (ship3 = { location: ["63", "64", "65"], hits: ["", "", ""] }),
  ],
  fire: function (guess) {
    // получает координаты выстрела
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.location.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Есть попадание!!!");
        if (this.isSunk(ship)) {
          view.displayMessage("Ты потопил мой корабль!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("Ты промазал!");
    return false;
  },
  isSunk: function (ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
};
// model.fire("23");
// model.fire("32");
// model.fire("25");
// model.fire("65");
// model.fire("43");
let controller = {
  guesses: 0,
  processGuess: function (guess) {
    let location = parceGuess(guess);
    if (location) {
      this.guesses++;
      let hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(
          "Вы потопили все корабли за: " + this.guesses + " выстрелов"
        );
      }
    }
  },
};
function parceGuess(guess) {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G"];
  if (guess === null) {
    alert("Вы ввели неверные координаты");
  } else {
    firstChar = guess.charAt(0); // извлекаем со строки первый символ
    let row = alphabet.indexOf(firstChar);
    let colum = guess.charAt(1);
    if (isNaN(row) || isNaN(colum)) {
      alert("Вы ввели неверные координаты");
    } else if (
      row < 0 ||
      row >= model.bordSize ||
      colum < 0 ||
      colum >= model.bordSize
    ) {
      alert("Вы ввели неверные координаты");
    } else {
      return row + colum;
    }
  }
  return null;
}
function init() {
  let fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  let guessInput = document.getElementById("guessInput");
  guessInput.onkeypress = handleKeyPress;
}
function handleFireButton() {
  let guessInput = document.getElementById("guessInput");
  let guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = "";
}
function handleKeyPress(e) {
  let fireButton = document.getElementById("fireButton");
  if (e.keyCode === 13) {
    //значение кнопки Enter
    fireButton.click();
    return false;
  }
}
window.onload = init;
// parceGuess("C3");
// console.log(parceGuess("A0"));
// console.log(parceGuess("B6"));
// console.log(parceGuess("G3"));
// console.log(parceGuess("H0"));
// console.log(parceGuess("A7"));
// controller.processGuess("B0");
// controller.processGuess("C0");
// controller.processGuess("D0");
// controller.processGuess("A1");

// controller.processGuess("D2");
// controller.processGuess("D3");
// controller.processGuess("D4");
// controller.processGuess("E4");

// controller.processGuess("G3");
// controller.processGuess("G4");
// controller.processGuess("F0");
// controller.processGuess("G5");
