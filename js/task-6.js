'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input[type="number"]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
    if (amount >= 1 && amount <= 100) {
        boxes.innerHTML = '';
        let size = 30;

        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.style.width = size + 'px';
            box.style.height = size + 'px';
            box.style.backgroundColor = getRandomHexColor();

            boxes.append(box);

            size += 10;
        }
    };

    input.value = '';
};

createButton.addEventListener("click", () => {
    const amount = input.value;
    createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
    boxes.innerHTML = '';
});

/* OR
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input[type="number"]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener("click", () => {
    const value = input.value;
    
    if (value >= 1 && value <= 100) {
        boxes.innerHTML = '';
        let size = 30;

        for (let i = 0; i < value; i++) {
            const box = document.createElement('div');
            box.style.width = size + 'px';
            box.style.height = size + 'px';
            box.style.backgroundColor = getRandomHexColor();

            boxes.append(box);

            size += 10;
        }
    };

    input.value = '';
});

destroyButton.addEventListener("click", () => {
    boxes.innerHTML = '';
});
*/