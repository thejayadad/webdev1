const timerElement = document.getElementById('timer');
const celebrationElement = document.getElementById('celebration');

let countdown = 10; // Initial countdown time in seconds

function updateTimerDisplay() {
    timerElement.textContent = countdown;
}

function startCountdown() {
    const countdownInterval = setInterval(() => {
        countdown--;
        updateTimerDisplay();

        if (countdown === 0) {
            clearInterval(countdownInterval); // Stop the countdown
            celebrate();
        }
    }, 1000); // Update every 1 second
}

function celebrate() {
    // Show the celebration animation
    celebrationElement.style.display = 'block';

    setTimeout(() => {
        celebrationElement.style.display = 'none';

        // Optionally, reset the timer for a new countdown
        countdown = 10;
        updateTimerDisplay();
        setTimeout(startCountdown, 1000); // Start countdown after 1 second (optional)
    }, 3000); // Wait for 3 seconds (adjust based on your animation duration)
}

updateTimerDisplay();
setTimeout(startCountdown, 1000); // Start countdown after 1 second (optional)
