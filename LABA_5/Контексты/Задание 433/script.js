"use strict";

let elem = document.querySelector("#elem");
elem.addEventListener("blur", parent);

function parent() {
  console.log(this.value); // Выведет значение value элемента 'text'

  function child() {
    console.log(this.value); // Выведет undefined
  }
  child();
}
