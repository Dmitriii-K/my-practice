const words = [
  {
    original: "Wassup",
    translation: "Здарова",
  },
  {
    original: "Bye",
    translation: "Покеда",
  },
  {
    original: "Programmer",
    translation: "Программист",
  },
];

// const words = {
//   word0: {
//     original: "Wassup",
//     translation: "Здарова",
//   },
//   word1: {
//     original: "Bye",
//     translation: "Покеда",
//   },
//   word2: {
//     original: "Programmer",
//     translation: "Программист",
//   },
//   wordsCount: 3,
// };
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

const userAbswer0 = prompt(words[0].original);
alert(userAbswer0 === words[0].translation);
if (userAbswer0 === words[0].translation) {
  result.correctAnswerscount = result.correctAnswerscount + 1;
}

const userAbswer1 = prompt(words[1].original);
alert(userAbswer1 === words[1].translation);
if (userAbswer1 === words[1].translation) {
  result.correctAnswerscount = result.correctAnswerscount + 1;
}

const userAbswer2 = prompt(words[2].original);
alert(userAbswer2 === words[2].translation);
if (userAbswer2 === words[2].translation) {
  result.correctAnswerscount = result.correctAnswerscount + 1;
}

const userCorrectAnswersParcent =
  (result.correctAnswerscount / words.length) * 100;

if (userCorrectAnswersParcent > setting.correctAnswersMiPaccent) {
  alert(resultMessager.finishSuccess);
} else {
  alert(resultMessager.finishUnSuccess);
}
