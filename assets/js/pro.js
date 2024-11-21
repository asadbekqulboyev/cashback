$(document).ready(function () {
    function startTimer(durationInSeconds , parent) {
      let remainingTime = durationInSeconds;
  
      function updateTimer() {
        const days = Math.floor(remainingTime / (24 * 60 * 60));
        const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
        const seconds = remainingTime % 60;
  
        $(`${parent} .days`).text(String(days).padStart(2, "0"));
        $(`${parent} .hours`).text(String(hours).padStart(2, "0"));
        $(`${parent} .minutes`).text(String(minutes).padStart(2, "0"));
        $(`${parent} .seconds`).text(String(seconds).padStart(2, "0"));
  
        if (remainingTime > 0) {
          remainingTime--;
        } else {
          clearInterval(timerInterval);
        }
      }
  
      updateTimer(); // Initial call
      const timerInterval = setInterval(updateTimer, 1000);
    }
  
    // Example: Start the timer for 13 days, 5 hours, 10 minutes, and 58 seconds
    startTimer(16 * 24 * 60 * 60 + 5 * 60 * 60 + 10 * 60 + 58, "#banner_1");
    startTimer(16 * 24 * 60 * 60 + 5 * 60 * 60 + 10 * 60 + 58, "#banner_2");
    startTimer(16 * 24 * 60 * 60 + 5 * 60 * 60 + 10 * 60 + 58, "#banner_3");
    startTimer(16 * 24 * 60 * 60 + 5 * 60 * 60 + 10 * 60 + 58, "#banner_4");
  });
  