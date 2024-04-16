/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
  const vowelsRegex = /[aeiouy]/gi;

  const vowelsArray = str.match(vowelsRegex);
  if (!vowelsArray) {
    return 0;
  }

  return vowelsArray.length;
}











































module.exports = getVowelsCount