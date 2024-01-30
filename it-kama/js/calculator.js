let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

/* function onbuttonPlusClick() {
  console.log("onbuttonPlusClick");
}
function onbuttonMinusClick() {
  console.log("onbuttonMinusClick");
}
function onbuttonMultiplyClick() {
  console.log("onbuttonMultiplyClick");
}
function onbuttonDevideClick() {
  console.log("onbuttonDevideClick");
}

///onbuttonDevideClick(); */

/* function onbuttonPlusClick() {
  let input1 = document.getElementById("number1");
  let input2 = document.getElementById("number2");
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summ = number1 + number2;
  window.alert(summ);
}
function onbuttonMinusClick() {
  let input1 = document.getElementById("number1");
  let input2 = document.getElementById("number2");
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summ = number1 - number2;
  window.alert(summ);
}
function onbuttonMultiplyClick() {
  let input1 = document.getElementById("number1");
  let input2 = document.getElementById("number2");
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summ = number1 * number2;
  window.alert(summ);
}
function onbuttonDevideClick() {
  let input1 = document.getElementById("number1");
  let input2 = document.getElementById("number2");
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let summ = number1 / number2;
  window.alert(summ);
} */

/// -----------Упрощение кода------------------///
/// 1. Выносим переменные input1, input2 за пределы функции

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

function getNumber1() {
  return Number(input1.value);
}
function getNumber2() {
  return Number(input2.value);
}

function onbuttonPlusClick() {
  let summ = getNumber1() + getNumber2();
  window.alert(summ);
}

function onbuttonMinusClick() {
  let summ = getNumber1() - getNumber2();
  window.alert(summ);
}

function onbuttonMultiplyClick() {
  let summ = getNumber1() * getNumber2();
  window.alert(summ);
}

function onbuttonDevideClick() {
  let summ = getNumber1() / getNumber2();
  window.alert(summ);
}

buttonPlus.addEventListener("click", onbuttonPlusClick);
buttonMinus.addEventListener("click", onbuttonMinusClick);
buttonMultiply.addEventListener("click", onbuttonMultiplyClick);
buttonDevide.addEventListener("click", onbuttonDevideClick);

///----------------------if, else  не прокатило-------------------///

/* function makeOperation(operationCode) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  if (operationCode === "+") {
    let summ = getNumber1() + getNumber2();
  } else if (operationCode === "-") {
    let summ = getNumber1() - getNumber2();
  } else if (operationCode === "*") {
    let summ = getNumber1() * getNumber2();
  } else if (operationCode === "/") {
    let summ = getNumber1() / getNumber2();
  } else {
    window.alert("operation unknown");
  }
  window.alert(summ);
}

function onOperationbuttonPlusClick(eventObjekt) {
  let clickedElement = eventObjekt.currentTarget;
  let operation = clickedElement.innerHTML;
  makeOperation(operation);
}

buttonPlus.addEventListener("click", onOperationbuttonPlusClick);
buttonMinus.addEventListener("click", onOperationbuttonPlusClick);
buttonMultiply.addEventListener("click", onOperationbuttonPlusClick);
buttonDevide.addEventListener("click", onOperationbuttonPlusClick); */
