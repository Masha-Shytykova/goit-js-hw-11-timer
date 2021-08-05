const daysEl = document.querySelector('span[data-value="days"]');
const hoursEl = document.querySelector('span[data-value="hours"]');
const minsEl = document.querySelector('span[data-value="mins"]');
const secsEl = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.onTick = onTick;
    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const targetDate = new Date('Aug 17, 2021');
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const time = getTimeComponents(deltaTime);

      this.onTick(time);
      //console.log(time);
      // updateClockface(time);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 17, 2021'),
  onTick: updateClockface,
});

// const timer = {
//   intervalId: null,
//   start() {
//     const targetDate = new Date('Aug 17, 2021');
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = targetDate - currentTime;
//       const time = getTimeComponents(deltaTime);

//       console.log(time);
//       updateClockface(time);
//     }, 1000);
//   },
// };

// timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}

function updateClockface({ days, hours, mins, secs }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${mins}`;
  secsEl.textContent = `${secs}`;
}

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const startBtnEl = document.querySelector(
//   'button[data-action="start"]',
// );
// const stopBtnEl = document.querySelector(
//   'button[data-action="stop"]',
// );
// const bodyEl = document.querySelector("body");

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let timerId = null;

// startBtnEl.addEventListener('click', onStartClick);
// stopBtnEl.addEventListener('click', onStopClick);

// //console.log(randomIntegerFromInterval(0, 5))
// //console.log(colors[5]);

// function onStartClick(e) {
//   timerId = setInterval(() => {
//     bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
//   }, 1000);
//   startBtnEl.setAttribute('disabled', true);
// }

// function onStopClick(e) {
//   clearInterval(timerId);
//   startBtnEl.removeAttribute('disabled');
// }
