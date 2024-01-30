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
  {
    original: "Laptop",
    translation: "Ноутбук",
  },
  {
    original: "Screen",
    translation: "Экран",
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

function startTraining(_words, _result) {
  for (let i = 0; i < _words.length; i++) {
    const userAnswer = prompt(_words[i].original);
    alert(userAnswer === _words[i].translation);
    if (userAnswer === _words[i].translation) {
      _result.correctAnswerscount = _result.correctAnswerscount + 1;
    }
  }
}
// for (let i = 0; i < words.length; i++) {
//   const userAnswer = prompt(words[i].original);
//   alert(userAnswer === words[i].translation);
//   if (userAnswer === words[i].translation) {
//     result.correctAnswerscount = result.correctAnswerscount + 1;
//   }
// }
// const userAbswer0 = prompt(words[0].original);
// alert(userAbswer0 === words[0].translation);
// if (userAbswer0 === words[0].translation) {
//   result.correctAnswerscount = result.correctAnswerscount + 1;
// }
// const userAbswer1 = prompt(words[1].original);
// alert(userAbswer1 === words[1].translation);
// if (userAbswer1 === words[1].translation) {
//   result.correctAnswerscount = result.correctAnswerscount + 1;
// }
// const userAbswer2 = prompt(words[2].original);
// alert(userAbswer2 === words[2].translation);
// if (userAbswer2 === words[2].translation) {
//   result.correctAnswerscount = result.correctAnswerscount + 1;
// }
function getPercentage(_result, _words) {
  return (_result.correctAnswerscount / _words.length) * 100;
}
function showResult(_words, _result, _setting) {
  const userCorrectAnswersParcent = getPercentage(result, words);

  if (userCorrectAnswersParcent > setting.correctAnswersMiPaccent) {
    alert(resultMessager.finishSuccess);
  } else {
    alert(resultMessager.finishUnSuccess);
  }
}

startTraining(words, result);
showResult(words, result, setting);

//--------1. Функция
//--------2. Переменные
//--------3. Команды
