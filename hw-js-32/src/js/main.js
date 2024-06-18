class CountdownTimer {
    constructor(timerData) {
        this.selector = timerData.selector;
        this.targetDate = timerData.targetDate;
    }
    startTimer() {
        const timerId = setInterval(() => {
            if ((this.targetDate - new Date()) <= 0) {
                clearInterval(timerId);
                document.querySelector('.title').innerHTML = `Час закінчився`
                document.querySelector(`${this.selector} span[data-value="days"]`).innerHTML = '0';
                document.querySelector(`${this.selector} span[data-value="hours"]`).innerHTML = '0';
                document.querySelector(`${this.selector} span[data-value="mins"]`).innerHTML = '0';
                document.querySelector(`${this.selector} span[data-value="secs"]`).innerHTML = '0';
                return false;
            }
            const time = this.targetDate - new Date();
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            document.querySelector(`${this.selector} span[data-value="days"]`).innerHTML = days;
            document.querySelector(`${this.selector} span[data-value="hours"]`).innerHTML = hours;
            document.querySelector(`${this.selector} span[data-value="mins"]`).innerHTML = mins;
            document.querySelector(`${this.selector} span[data-value="secs"]`).innerHTML = secs;
        }, 1000)
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('June 18, 2024, 19:13'),
});

timer.startTimer();