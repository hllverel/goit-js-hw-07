'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bgChangeButton = document.querySelector('.change-color');
const bgColorText = document.querySelector('.color');
const body = document.querySelector('body');

bgChangeButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  bgColorText.textContent = getRandomHexColor();
});

