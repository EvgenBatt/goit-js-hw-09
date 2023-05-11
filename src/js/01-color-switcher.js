function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = 0;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function startChangeBackgroundColor() {
  timerId = setInterval(changeBackgroundColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopChangeBackgroundColor() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener('click', startChangeBackgroundColor);
stopBtn.addEventListener('click', stopChangeBackgroundColor);

// Розмітка кнопок

const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');
buttonsDiv.setAttribute(
  'style',
  'display: flex; gap: 50px; justify-content: center; margin-top: 30px;'
);
startBtn.style.padding = '20px 50px';
stopBtn.style.padding = '20px 50px';
buttonsDiv.append(startBtn, stopBtn);

const body = document.querySelector('body');
const p = body.querySelector('p');
p.insertAdjacentElement('afterend', buttonsDiv);
