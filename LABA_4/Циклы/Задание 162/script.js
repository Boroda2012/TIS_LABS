"use strict";

// 1 task
let obj1 = {x: 1, y: 2, z: 3};

for (let key in obj1) {
  obj1[key] = obj1[key] * obj1[key];
}

console.log(obj1); // выведет {x: 1, y: 4, z: 9}

// 2 task
let obj2 = {x: 1, y: 2, z: 3};

for (let key in obj2) {
  obj2[key] = obj2[key] + 1;
}

console.log(obj2); // выведет {x: 2, y: 3, z: 4}

// 3 task