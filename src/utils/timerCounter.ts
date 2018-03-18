import { EventEmitter } from 'events';

export class TimerCounter {
    private loop: number;
    private timer: any;
    private eventEmitter: any;

    constructor(timer: any) {
        this.loop = 1;
        this.timer = timer;
        this.eventEmitter = new EventEmitter();
        this.init();
    }

    public init() {
        console.log("timer init");
        this.timer.setElapsed(0);
        this.timer.setActive(0);
        this.eventEmitter.on('timeout', this.timer.getCallback());
        setInterval(this.execute.bind(this), 1000);
    }
    public reset() {
        console.log("timer reset");
        this.timer.setElapsed(0);
        this.timer.setActive(1);
        this.loop = 1;
    }
    public resetForOneTime() {
        console.log("timer reset one time");
        this.timer.setElapsed(0);
        this.timer.setActive(1);
        this.loop = 0;
    }

    public active() {
        this.timer.setActive(1);
    }

    public deactive() {
        this.timer.setActive(0);
    }

    public execute() {
        if (this.timer.getActive() === 1) {
            this.timer.setElapsed(this.timer.getElapsed() + 1);
            if (this.timer.getElapsed() >= this.timer.getTimeStamp()) {
                this.eventEmitter.emit('timeout', this.timer.getCallbackArgs);
                this.timer.setElapsed(0);
                if(this.loop !== 1){
                    this.deactive();
                }
            }
        }
    }
};