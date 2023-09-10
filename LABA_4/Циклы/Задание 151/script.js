"use strict";

// 1 task
let arr = [2, 5, 9, 3, 1, 4];
let sum = 0;

for (let elem of arr) {
  sum += elem;
}

console.log(sum);

// 2 task
let arr2 = [2, 5, 9, 3, 1, 4];
let sumEven = 0;

for (let elem of arr2) {
  if (elem % 2 === 0) {
    sumEven += elem;
  }
}

console.log(sumEven);

// 3 task