const targetTime = new Date('November 24, 2024 18:55:00').getTime();
const targetJ = new Date('November 12, 2024 18:00:00').getTime();

const days = document.getElementById('days');
const daysJ = document.getElementById('daysJ')
const hours = document.getElementById('hours');
const hoursJ = document.getElementById('hoursJ');
const minutes = document.getElementById('minutes');
const minutesJ = document.getElementById('minutesJ');
const seconds = document.getElementById('seconds');
const secondsJ = document.getElementById('secondsJ');

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetTime - now;
    const distanceJ = targetJ - now;

    days.innerHTML = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    hours.innerHTML = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    minutes.innerHTML = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    seconds.innerHTML = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    daysJ.innerHTML = String(Math.floor(distanceJ / (1000 * 60 * 60 * 24))).padStart(2, '0');
    hoursJ.innerHTML = String(Math.floor((distanceJ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    minutesJ.innerHTML = String(Math.floor((distanceJ % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    secondsJ.innerHTML = String(Math.floor((distanceJ % (1000 * 60)) / 1000)).padStart(2, '0');
    
}, 1000)