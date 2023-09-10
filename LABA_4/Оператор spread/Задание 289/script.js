"use strict";

// 1 task
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr = ['a', ...arr1, 'b', 'c', ...arr2];
console.log(arr);

//   выведет a, 1, 2, 3, b, c, 4, 5, 6


// 2 task
let arr21 = [1, 2, 3];
let arr22 = [4, 5, 6];

let arr23 = ['a', ...arr21, ...arr21, 'b', 'c'];
console.log(arr23);

//   выведет a, 1, 2, 3, 1, 2, 3, b, c


// 3 task
