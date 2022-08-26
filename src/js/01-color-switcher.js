const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null; 

buttonStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        body.fillStyle = getRandomHexColor;
    }, 1000);
});

buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
});

