"use strict";

// 1 task
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let daysObject = {};

for (let i = 0; i < arr1.length; i++) {
  daysObject[arr1[i]] = arr2[i];
}

console.log(daysObject);

// 2 task
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let evenNumbersObject = {};

for (let key in obj) {
  if (obj[key] % 2 === 0) {
    evenNumbersObject[key] = obj[key];
  }
}

console.log(evenNumbersObject);

// 3 task