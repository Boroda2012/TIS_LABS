"use strict";

// 1 task
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
  if (elem === 'c') {
    flag = true;
    break;
  }
}

if (flag === true) {
  console.log('+++');
} else {
  console.log('---');
}

// 2 task
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(17));
console.log(isPrime(4)); 


// 3 task