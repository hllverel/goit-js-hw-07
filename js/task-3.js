'use strict';

//Görev 3: #name-input yazılırken trimmed değeri #name-output’a koyun; boş/boşluksa “Anonymous” yazın.

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
});