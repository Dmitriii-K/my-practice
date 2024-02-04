let massiv = [5, 4, 3, 5, 4];

for (let i = 0; i < massiv.length; i++) {
  document.write("<br>", massiv[i], "<br>");
}
//----------------------------------------------------------------
let books = [
  "Война миров",
  "Война и мир",
  "Мастер и Маргарита",
  "Преступление и наказание",
];
// console.log(books);//-----весь массив
for (let x = 0; x < books.length; x++) {
  document.write(books[x], "<br>");
  document.write("<br>");
}
//--------------------------------------------------------------
let shopingLits = [
  ["молоко", "хлеб", "яйца"],
  ["сок", "мороженое"],
  ["корм для кота", "шампунь"],
];
for (let j = 0; j < shopingLits.length; j++) {
  let subarray = shopingLits[j];
  document.write("СПИСОК", j + 1, "<br>");
  document.write("---------", "<br>");
  for (let v = 0; v < subarray.length; v++) {
    let product = subarray[v];
    document.write(v + 1, "-", product, "<br>");
  }
  document.write("<br>");
}
// let list = shopingLits[0];//--i=0
// let product0 = list[0]; //----j=0------молоко
// let product1 = list[1]; //----j=1--------хлеб
// let product2 = list[2]; //----j=2--------яйца

// list = shopingLits[1];//----i=1
// product0 = list[0];//-------j=0
// product1 = list[1];//-------j=1

// console.log(product);
console.log("*** forEach() ***");
const fruits = ["Яблоко", "Груша", "Слива", "Апельсин", "Виноград"];
fruits.forEach(function (item, index) {
  console.log(`Элемент с индексом ${index} = ${item}`);
});
