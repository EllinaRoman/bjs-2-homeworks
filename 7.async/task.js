class AlarmClock {
    constructor() {

    }

    alarmCollection = [];
    intervalId = null;

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        // if (this.alarmCollection.find(i => i.time === time)) {
        //     console.warn('Уже присутствует звонок на это же время')
        //     return;
        // }

        this.alarmCollection.push(
            {
                callback,
                time,
                canCall: true,
            }
        )
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((i) => i.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        return `${now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()}:${now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => 
            {
                this.alarmCollection.forEach((el) => {
                    if (this.getCurrentFormattedTime() === el.time && el.canCall === true) {
                        el.canCall = false;
                        el.callback();
                    } 
                })

            }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((el) => {
                        el.canCall = true;
                })
            }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}