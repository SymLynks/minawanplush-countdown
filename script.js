// Countdown to 16.05.2026 00:00 UTC (year, monthIndex, day)
document.addEventListener('DOMContentLoaded', () => {
    const targetMs = Date.UTC(2026, 4, 16, 0, 0, 0); // May is monthIndex 4
    const $ = id => document.getElementById(id);
    const daysEl = $('days'), hoursEl = $('hours'), minutesEl = $('minutes'), secondsEl = $('seconds');

    function updateCountdown() {
        const now = Date.now();
        let diff = targetMs - now;
        if (diff <= 0) {
            daysEl.textContent = '0';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            clearInterval(timer);
            return;
        }
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days);
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // Trigger images to slide in from edges
    requestAnimationFrame(() => {
        const imgs = document.getElementById('images');
        setTimeout(() => imgs.classList.add('enter'), 50);
    });
});
