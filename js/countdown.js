/**
 * Segredos da Obsessão Masculina - Countdown Timer
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown date to 24 hours from now
    const countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + 24);
    
    // Update the countdown every 1 second
    const countdownTimer = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the count down date
        const distance = countDownDate - now;
        
        // Time calculations for hours, minutes and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        
        // If the count down is finished, display expired message
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "<p>Oferta expirada</p>";
        }
    }, 1000);
});
