const arrivalDate = new Date('2026-08-20T09:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = arrivalDate - now;

    const timerElement = document.getElementById('timer');

    if (distance < 0) {
        timerElement.innerHTML = '<div class="timer-box" style="grid-column: span 4;"><span class="timer-num" style="color: #B91C1C;">Хозяева уже приехали! 🎉</span></div>';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `
        <div class="timer-box"><span class="timer-num">${days}</span><span class="timer-label">дней</span></div>
        <div class="timer-box"><span class="timer-num">${String(hours).padStart(2, '0')}</span><span class="timer-label">часов</span></div>
        <div class="timer-box"><span class="timer-num">${String(minutes).padStart(2, '0')}</span><span class="timer-label">минут</span></div>
        <div class="timer-box"><span class="timer-num">${String(seconds).padStart(2, '0')}</span><span class="timer-label">секунд</span></div>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);