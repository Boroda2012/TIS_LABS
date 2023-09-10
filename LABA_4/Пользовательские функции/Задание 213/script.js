"use strict";

// 1 task
function calculateAverage(arr) {
  let sum = 0;
  
  for (let elem of arr) {
    sum += elem;
  }
  
  return sum / arr.length;
}


// 2 task
function sumArray(arr) {
  let sum = 0;
  
  for (let elem of arr) {
    sum += elem;
  }
  
  return sum;
}

function calculateRatio(arr1, arr2) {
  const sum1 = sumArray(arr1);
  const sum2 = sumArray(arr2);
  
  if (sum2 === 0) {
    return "Division by zero is not allowed.";
  }
  
  return sum1 / sum2;
}


// 3 task
