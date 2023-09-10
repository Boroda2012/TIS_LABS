"use strict";

// 1 task
const strings = ["Hello", "World", "JavaScript"];
const stringsWithExclamation = strings.map(function(string) {
  return string + "!";
});

console.log(stringsWithExclamation);


// 2 task
const strings2 = ["apple", "banana", "cherry"];
const reversedStrings = strings.map(function(string2) {
  return string.split('').reverse().join('');
});

console.log(reversedStrings);


// 3 task
