let location1 = Math.floor(Math.random() * 5); // возвращает от 0 до 4 в целом значении
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
  guess = +prompt("Огонь! (введи цифру от 0 до 6)");
  if (guess < 0 || guess > 6) {
    alert("Я же просил от 0 до 6 !!!");
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits++;
      if (hits == 3) {
        isSunk = true;
        alert("Ты победил");
      }
    } else {
      alert("МИМО!");
    }
  }
}

let status = `Вы стреляли ${guesses} раз по караблям, ваша средняя точность ${
  3 / guesses
}`;
alert(status);
