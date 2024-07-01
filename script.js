// Get current time in UTC
const currentTimeUTC = document.getElementById('currentTimeUTC');
const currentDay = document.getElementById('currentDay');

setInterval(() => {
  const date = new Date();
  const utcTime = date.toUTCString();
  const day = date.toLocaleString('en-US', { weekday: 'long' });
  currentTimeUTC.textContent = utcTime;
  currentDay.textContent = day;
}, 1000);