// const targetTime = new Date('January 16, 2025 22:00:00').getTime();
const targetTime = new Date('2025-01-16T22:00:00+07:00').getTime();

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    days.innerHTML = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    hours.innerHTML = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    minutes.innerHTML = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    seconds.innerHTML = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
    
    if (distance < 0) {
        clearInterval(countdown);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }

}, 1000)