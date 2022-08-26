import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayEl = document.querySelector('[name = "delay"]');
const stopEl = document.querySelector('[name = "stop"]');
const amountEl = document.querySelector('[name = "amount"]');

form.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({ position, delay });
  } else {
    reject({ position, delay });
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });