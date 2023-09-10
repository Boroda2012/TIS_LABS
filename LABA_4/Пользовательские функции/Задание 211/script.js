"use strict";

// 1 task
function areAllEven(arr) {
  for (let elem of arr) {
    if (elem % 2 !== 0) {
      return false;
    }
  }
  return true;
}
const numbers1 = [2, 4, 6, 8];
const numbers2 = [2, 4, 7, 8];
console.log(areAllEven(numbers1));
console.log(areAllEven(numbers2));

// 2 task
function areDigitsOdd(number) {
  const digits = number.toString().split('').map(Number);
  for (let digit of digits) {
    if (digit % 2 === 0) {
      return false;
    }
  }
  return true;
}
const num1 = 13579;
const num2 = 123456;
console.log(areDigitsOdd(num1));
console.log(areDigitsOdd(num2));

// 3 task
