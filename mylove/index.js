function changeTheme(event) {
  const type = event.target.getAttribute('title');
  if (type === '粉色') {
    document.body.setAttribute('data-theme', 'pink');
  } else if (type === '红色') {
    document.body.setAttribute('data-theme', 'red');
  }
}
// 表白时间
const time = {
  year: 2024,
  month: 5,
  date: 1,
  hour: 11,
  minute: 26,
  second: 0
};

const date = new Date();
date.setYear(time.year);
date.setMonth(time.month - 1);
date.setDate(time.date);
date.setHours(time.hour);
date.setMinutes(time.minute);
date.setSeconds(time.second);
date.setMilliseconds(0);

const nowTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};

function timeElapse() {
  // TODO: 优化时间计算，时间初始化完成后按秒递增，而不是每次都重新计算
  let current = Date();
  let seconds = (Date.parse(current) - Date.parse(date)) / 1000;
  nowTime.days = Math.floor(seconds / (3600 * 24));
  seconds = seconds % (3600 * 24);
  nowTime.hours = Math.floor(seconds / 3600);
  if (nowTime.hours < 10) {
    nowTime.hours = '0' + nowTime.hours;
  }
  seconds = seconds % 3600;
  nowTime.minutes = Math.floor(seconds / 60);
  if (nowTime.minutes < 10) {
    nowTime.minutes = '0' + nowTime.minutes;
  }
  nowTime.seconds = seconds % 60;
  if (nowTime.seconds < 10) {
    nowTime.seconds = '0' + nowTime.seconds;
  }
  updateDom();
}

const day = document.querySelector('#day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

function updateDom() {
  day.innerText = nowTime.days;
  hour.innerText = nowTime.hours;
  minute.innerText = nowTime.minutes;
  second.innerText = nowTime.seconds;
}

setInterval(() => {
  timeElapse();
}, 1000);
