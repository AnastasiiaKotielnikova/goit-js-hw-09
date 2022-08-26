import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const flatInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let userSelectedDate = null;

flatpickr(flatInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            Notify.failure('Please choose a date in the future');
        } else {
            userSelectedDate = selectedDates[0];
            btnStart.disabled = false;
        }
    },
});

btnStart.addEventListener('click', () => {
    const timerId = setInterval(() => {
        const deltaTime = userSelectedDate - new Date();
        if (deltaTime <= 0) {
            clearInterval(timerId);
            deltaTime = 0;
        }
        const resultTime = convertMs(deltaTime);
        updateUserInterface(resultTime);
    }, 1000);
    btnStart.disabled = true;
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

function updateUserInterface({ days, hours, minutes, seconds }) {
  daysRef.textContent = pad(days);
  hoursRef.textContent = pad(hours);
  minutesRef.textContent = pad(minutes);
  secondsRef.textContent = pad(seconds);
}