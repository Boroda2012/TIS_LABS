"use strict";

// 1 task
const numbers = [-1, 0, 2, -3, 4];
const hasPositiveNumber = numbers.some(function(number) {
  return number > 0;
});

console.log(hasPositiveNumber);


// 2 task
const numbers2 = [1, 2, 3, 4, 5];
const hasProductGreaterThan30 = numbers2.some(function(number2, index) {
  return number2 * index > 30;
});

console.log(hasProductGreaterThan30);


// 3 task
