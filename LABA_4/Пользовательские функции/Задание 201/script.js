"use strict";

// 1 task
function cube(num) {
    console.log(num ** 3);
}
cube(2);
cube(3);

// 2 task
function checkNumber(num) {
    if (num > 0) {
        console.log('+++');
    } else if (num < 0) {
        console.log('---');
    } else {
        console.log('Число равно нулю');
    }
}
checkNumber(5); 
checkNumber(-5);
checkNumber(0);

// 3 task