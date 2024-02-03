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
var model = {
  boardSize: 7, // размер игрового поля
  numShips: 3, // кол-во кораблей в игре
  shipLength: 3, // длинна корабля в клетках
  shipsSunk: 0, // кол-во потопленных кораблей на начало игры

  ships: [
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
    { locations: [0, 0, 0], hits: ["", "", ""] },
  ],

  fire: function (guess) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);

      if (ship.hits[index] === "hit") {
        view.displayMessage("Вы уже попали в это место!");
        return true;
      } else if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("Есть попадание!");

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
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== "hit") {
        return false;
      }
    }
    return true;
  },
  // Метод создает в модели массив ships
  generateShipLocations: function () {
    var locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
    console.log("Массив кораблей: ");
    console.log(this.ships);
  },

  // метод создает один корабль
  generateShip: function () {
    var direction = Math.floor(Math.random() * 2);
    var row, col;

    if (direction === 1) {
      // horizontal размещение
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
    } else {
      // vertical размещение
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      col = Math.floor(Math.random() * this.boardSize);
    }

    var newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        // добывить в массив для горизонт.
        newShipLocations.push(row + "" + (col + i));
      } else {
        // добавить в массив для вертикал.
        newShipLocations.push(row + i + "" + col);
      }
    }
    return newShipLocations;
  },

  // метод получает один корабль и проверяет, что тот не перекрывается с другими кораблями
  collision: function (locations) {
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
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

  model.generateShipLocations();
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
