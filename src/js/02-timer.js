import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let endDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chosenDate = selectedDates[0];
    if (chosenDate <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      document.querySelector('[data-start]').setAttribute('disabled', true);
    } else {
      endDate = chosenDate;
      document.querySelector('[data-start]').removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

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

function startTimer(endDate) {
  const timerDays = document.querySelector('[data-days]');
  const timerHours = document.querySelector('[data-hours]');
  const timerMinutes = document.querySelector('[data-minutes]');
  const timerSeconds = document.querySelector('[data-seconds]');

  function updateTimer() {
    const timeLeft = endDate - Date.now();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    timerDays.textContent = addLeadingZero(days);
    timerHours.textContent = addLeadingZero(hours);
    timerMinutes.textContent = addLeadingZero(minutes);
    timerSeconds.textContent = addLeadingZero(seconds);
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

document.querySelector('[data-start]').addEventListener('click', () => {
  startTimer(endDate);
});

// Розмітка елементів

document.body.style.margin = '50px 30%';

const timerDiv = document.querySelector('.timer');
timerDiv.setAttribute('style', 'display: flex; gap: 10px; margin-top: 10px;');

const fieldDivs = document.querySelectorAll('.field');
fieldDivs.forEach(fieldDiv => {
  fieldDiv.setAttribute(
    'style',
    'display: flex; flex-direction: column; align-items: center;'
  );
});

const timeValues = document.querySelectorAll('.value');
timeValues.forEach(timeValue => {
  timeValue.setAttribute('style', 'font-size: 20px');
});
