"use strict";

// 1 task
const numbers = [1, 2, 3, 4, 5];
const allGreaterThanZero = numbers.every(function(number) {
  return number > 0;
});

console.log(allGreaterThanZero);



// 2 task
const numbers2 = [1, 2, 3, 4, 5];
const productLessThan30 = numbers2.every(function(number2, index) {
  return number2 * index < 30;
});

console.log(productLessThan30);



// 3 task
