const fnWithError = () => {
  // код останавливается
  throw new Error("Some error");
};
try {
  // помещаем код в котором может быть ошибка
  fnWithError();
} catch (error) {
  // код будет продолжаться не смотря на ошибку
  console.error(error);
  console.log(error.message);
}
console.log("Continue...");
