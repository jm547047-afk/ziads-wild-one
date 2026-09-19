const eventDate = new Date("October 11, 2026 15:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = Math.max(0, days);
    document.getElementById("hours").textContent = Math.max(0, hours);
    document.getElementById("minutes").textContent = Math.max(0, minutes);
    document.getElementById("seconds").textContent = Math.max(0, seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
