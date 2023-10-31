        const timeLabel = document.getElementById("time");
        const startButton = document.getElementById("startBtn");
        const stopButton = document.getElementById("stopBtn");
        const resetButton = document.getElementById("resetBtn");
        const datePicker = document.getElementById("datepicker");

        let startTime;
        let intervalId;
        let pausedTime = 0;

        function updateTime() {
            const currentTime = new Date().getTime() - startTime + pausedTime;
            const time = new Date(currentTime);
            const hours = time.getUTCHours().toString().padStart(2, "0");
            const minutes = time.getUTCMinutes().toString().padStart(2, "0");
            const seconds = time.getUTCSeconds().toString().padStart(2, "0");
            timeLabel.textContent = `${hours}:${minutes}:${seconds}`;
        }

        startButton.addEventListener("click", () => {
            if (!intervalId) {
                startTime = new Date().getTime() - pausedTime;
                intervalId = setInterval(updateTime, 1000);
                startButton.disabled = true;
                stopButton.disabled = false;
                resetButton.disabled = false;
                datePicker.disabled = true;
            }
        });

        stopButton.addEventListener("click", () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
                pausedTime = new Date().getTime() - startTime;
                startButton.disabled = false;
                stopButton.disabled = true;
                datePicker.disabled = false;
            }
        });

        resetButton.addEventListener("click", () => {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
            timeLabel.textContent = "00:00:00";
            startButton.disabled = false;
            stopButton.disabled = true;
            resetButton.disabled = true;
            pausedTime = 0;
            datePicker.disabled = false;
        });