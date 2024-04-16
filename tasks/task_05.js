/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0; 
  }
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  return Math.round(average * 10) / 10;
}








































module.exports = abs