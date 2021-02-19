class Clock {
    constructor() {
        let d = new Date();
        this.hours = d.getHours();
        this.minutes = d.getMinutes();
        this.seconds = d.getSeconds();
        for (let i = 0; i < 100000; i+= 1000) {
            setTimeout(() => {
                this._tick();
            }, i);
        }
    }

    printTime () {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;
                if (this.hours === 24) {
                    this.hours = 0;
                } 
            }
        }
        this.printTime();
    }
}