"use strict";

// 1 task
function func1() {
  return 3;
}
function func2() {
  return 5;
}
console.log(func1() + func2());

// 2 task
function sum(arr) {
  let res = 0;

  for (let elem of arr) {
    res += elem;
  }

  return res;
}
console.log(sum([1, 2, 3, 4, 5]));

// 3 task
