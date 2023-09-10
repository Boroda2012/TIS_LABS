"use strict";

// 1 task
function calculateSum(arr) {
  let sum = 0;

  for (let elem of arr) {
    sum += elem;
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));

// 2 task
function findDivisors(number) {
  const divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

const num = 12;
console.log(findDivisors(num));

// 3 task
