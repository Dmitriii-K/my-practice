const words = {
  word0: {
    original: "Wassup",
    translation: "Здарова",
  },
  word1: {
    original: "Bye",
    translation: "Покеда",
  },
  word2: {
    original: "Programmer",
    translation: "Программист",
  },
  wordsCount: 3,
};
const resultMessager = {
  finishSuccess: "Молодец, Good result",
  finishUnSuccess: "Молодец, но постарайся лучше",
};

const setting = {
  correctAnswersMiPaccent: 50,
};
const result = {
  correctAnswerscount: 0,
};

const userAbswer0 = prompt(words.word0.original);
alert(userAbswer0 === words.word0.translation);
if (userAbswer0 === words.word0.translation) {
  result.correctAnswerscount = result.correctAnswerscount + 1;
}

const userAbswer1 = prompt(words.word1.original);
alert(userAbswer1 === words.word1.translation);
if (userAbswer1 === words.word1.translation) {
  result.correctAnswerscount = result.correctAnswerscount + 1;
}

const userAbswer2 = prompt(words.word2.original);
alert(userAbswer2 === words.word2.translation);
if (userAbswer2 === words.word2.translation) {
  result.correctAnswerscount = result.correctAnswerscount + 1;
}

const userCorrectAnswersParcent =
  (result.correctAnswerscount / words.wordsCount) * 100;

if (userCorrectAnswersParcent > setting.correctAnswersMiPaccent) {
  alert(resultMessager.finishSuccess);
} else {
  alert(resultMessager.finishUnSuccess);
}
