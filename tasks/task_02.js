/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
  str = str.replace(/\s/g, '').toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


















































module.exports = isPalindrome