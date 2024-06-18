class CountdownTimer {
    constructor(timerData) {
        this.selector = timerData.selector;
        this.targetDate = timerData.targetDate;
    }
    startTimer() {
        setInterval(() => {
            const time = this.targetDate - new Date();
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            document.querySelector(`${this.selector} span[data-value="days"]`).innerHTML = days;
            document.querySelector(`${this.selector} span[data-value="hours"]`).innerHTML = hours;
            document.querySelector(`${this.selector} span[data-value="mins"]`).innerHTML = mins;
            document.querySelector(`${this.selector} span[data-value="secs"]`).innerHTML = secs;
            console.log(days, hours, mins, secs)
        }, 1000)
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2019'),
});

timer.startTimer();