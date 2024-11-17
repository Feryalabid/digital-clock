function updateClock() {
    const clockElement = document.getElementById('digitalClock');
    
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;  // If hours is 0, set it to 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine time into a string
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Display the time with AM/PM
    clockElement.innerHTML = `
        <div class="time">${timeString}</div>
        <div class="am-pm">${ampm}</div>
    `;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
window.onload = updateClock;