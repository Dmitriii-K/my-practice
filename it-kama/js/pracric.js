//----------------------------------------- Конструктор объектов-------------------------------//
function Dog(name) {
  this.myname = name;
  this.voice = function () {
    console.log("Hey, my name is " + this.myname);
  };
}
//---------------------------------------------------------------------------------------------//
let chauchau = new Dog("Laika"); //-----задаем переменные с инициализацией------//
let buldog = new Dog("Bobic");
//--------------------------------------------------------------------------------------------//
chauchau.voice(); //-----команды----//
buldog.voice();
//-------------------------------------------------------------------------------------------//

function Car(name) {
  this.name = name;
  this.isTurnOn = false;
  this.speed = 0;
  this.engine = {
    v: 1.6,
    Power: 120,
    isTurnOn: false,
  };

  // this.start = function () {
  //   this.isTurnOn = true;
  //   this.speed = 10;
  //   this.engine.isTurnOn = true;
  //   console.log(this.name, "", this.speed);
  // };
}
//-----в-prototype-цепляем только методы---//
Car.prototype.start = function () {
  this.isTurnOn = true;
  this.speed = 20;
  this.engine.isTurnOn = true;
  console.log(this.name, "", this.speed);
};

let reno = new Car("reno");
reno.start();
let mers = new Car("mers");
mers.start();
