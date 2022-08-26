import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnRef = document.querySelector("[type='submit']");
const formRef = document.querySelector('.form');

const delayInputRef = formRef.querySelector("[name='delay']");
const stepInputRef = formRef.querySelector("[name='step']");
const amountInputRef = formRef.querySelector("[name='amount']");

const labels = formRef.querySelectorAll('label');


formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const delayValue = parseInt(form.delay.value);
  const stepValue = parseInt(form.step.value);
  const amountValue = parseInt(form.amount.value);

  for (let position = 0; position < amountValue; position += 1) {
    const delay = delayValue + stepValue * position;

    createPromise({ position, delay })
      .then(({ position, delay } = {}) => {
        Notify.success(`&#x2705 Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay } = {}) => {
        Notify.failure(`&#10060 Rejected promise ${position + 1} in ${delay}ms`);
      });
  }
}

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;

  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  };

  const promise = new Promise(executor);
  return promise;
}





