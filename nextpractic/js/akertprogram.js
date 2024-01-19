const word0 = "Wassup";
const word0translation = "Здарова";
const word1 = "Bye";
const word1translation = "Покеда";
const word2 = "Programmer";
const word2translation = "Программист";

const finishSuccessMessage = "Молодец, Good result";
const finishUnSuccessMessage = "Молодец, но постарайся лучше";

const wordsCount = 3;
const correctAnswersMiPaccent = 50;

let correctAnswerscount = 0;

const userAbswer0 = prompt(word0);
alert(userAbswer0 === word0translation);
if (userAbswer0 === word0translation) {
  correctAnswerscount = correctAnswerscount + 1;
}

const userAbswer1 = prompt(word1);
alert(userAbswer1 === word1translation);
if (userAbswer1 === word1translation) {
  correctAnswerscount = correctAnswerscount + 1;
}

const userAbswer2 = prompt(word2);
alert(userAbswer2 === word2translation);
if (userAbswer2 === word2translation) {
  correctAnswerscount = correctAnswerscount + 1;
}

const userCorrectAnswersParcent = (correctAnswerscount / wordsCount) * 100;

if (userCorrectAnswersParcent > correctAnswersMiPaccent) {
  alert(finishSuccessMessage);
} else {
  alert(finishUnSuccessMessage);
}
