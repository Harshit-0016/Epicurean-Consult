let timeLeft = 10 * 60;

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            document.getElementById("timer").textContent = `${minutes}:${seconds}`;

            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                document.getElementById("timer").textContent = "Time's up!";
            }
        }

        const timerInterval = setInterval(updateTimer, 1000);

        function showForm() {
            document.getElementById('formContainer').classList.add('active');
        }

        function closeForm() {
            document.getElementById('formContainer').classList.remove('active');
        }

        setTimeout(showForm, 10000);