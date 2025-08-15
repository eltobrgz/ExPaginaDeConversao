/**
 * Segredos da Obsessão Masculina - Countdown Timer
 */

document.addEventListener('DOMContentLoaded', function() {
    // Função para criar um countdown que sempre mostra urgência
    function createCountdown() {
        const now = new Date();
        
        // Calcula o tempo até a meia-noite + 1 dia para criar senso de urgência
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const countDownDate = tomorrow.getTime();
        
        // Update the countdown every 1 second
        const countdownTimer = setInterval(function() {
            // Get today's date and time
            const currentTime = new Date().getTime();
            
            // Find the distance between now and the count down date
            const distance = countDownDate - currentTime;
            
            // Time calculations for hours, minutes and seconds
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result with zero padding
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");
            const secondsElement = document.getElementById("seconds");
            
            if (hoursElement) hoursElement.innerHTML = hours < 10 ? "0" + hours : hours;
            if (minutesElement) minutesElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            if (secondsElement) secondsElement.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            // If the count down is finished, reset for next day
            if (distance < 0) {
                clearInterval(countdownTimer);
                // Restart countdown for next day
                setTimeout(createCountdown, 1000);
            }
        }, 1000);
    }
    
    // Initialize countdown
    createCountdown();
});
