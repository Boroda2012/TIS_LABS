"use strict";

// 1 task
let arr1 = [1, 2, 3, 4, 0, 5, 6];

for (let elem of arr1) {
  console.log(elem);
  if (elem === 0) {
    break;
  }
}


// 2 task
let arr2 = [1, 2, 3, 4, -5, 6, 7];
let sum = 0;

for (let elem of arr2) {
  if (elem < 0) {
    break;
  }
  sum += elem;
}

console.log(sum);



// 3 task