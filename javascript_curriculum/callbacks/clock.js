// Use setInterval to build a small clock in your terminal.
// It should display the current time every second.
// However, you can only query the system time once.Your clock must store that time, 
// increment it, and display it in HH: MM: SS(use 24hr format)

class Clock {

    constructor(){
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000)
    }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds < 10 ? '0' + this.seconds : this.seconds}`)
    }

    _tick(){
        this.seconds++;
        if (this.seconds > 59){
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes > 59) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours > 23) {
            this.hours = 0;
        }
        this.printTime();
    }

}


c = new Clock();