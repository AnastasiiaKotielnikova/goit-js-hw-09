const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null; 

buttonStart.addEventListener('click', () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStart.disabled = false;
});

