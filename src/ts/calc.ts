/* eslint-disable no-param-reassign */
export {};

const rangeElList = document.querySelectorAll('.js-range');

const studentRange = document.querySelector(
  '.js-student-range',
) as HTMLInputElement;
const sessionRange = document.querySelector(
  '.js-session-range',
) as HTMLInputElement;
const sellRange = document.querySelector('.js-sell-range') as HTMLInputElement;

const profitLabelEl = document.querySelector(
  '.js-calc-result',
) as HTMLSpanElement;

let profit: number;

let studentCurrentStep = 10;
let sessionCurrentStep = 5;
let sellCurrentStep = 8;

const calcResult = () => {
  profit = Number(studentRange.value) * 24000
    + Number(sessionRange.value) * 2000
    + Number(sellRange.value) * 200;
  profitLabelEl.textContent = profit.toLocaleString();
};

calcResult();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #dc3f54 0%, #dc3f54 ${String(
    (currentStep / steps) * 100,
  )}%, #ffd78e ${String((currentStep / steps) * 100)}%, #ffd78e 100%)`;
});

studentRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  studentCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #dc3f54 0%, #dc3f54 ${String(
    (studentCurrentStep / steps) * 100,
  )}%, #ffd78e ${String((studentCurrentStep / steps) * 100)}%, #ffd78e 100%)`;

  calcResult();
});

sessionRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  sessionCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #dc3f54 0%, #dc3f54 ${String(
    (sessionCurrentStep / steps) * 100,
  )}%, #ffd78e ${String((sessionCurrentStep / steps) * 100)}%, #ffd78e 100%)`;

  calcResult();
});

sellRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  sellCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #dc3f54 0%, #dc3f54 ${String(
    (sellCurrentStep / steps) * 100,
  )}%, #ffd78e ${String((sellCurrentStep / steps) * 100)}%, #ffd78e 100%)`;

  calcResult();
});
