export class Timer {

    private elapsed: number;
    private active: number;
    private timestamp: number;
    private callback: any;
    private callbackArgs: any;

    constructor(timestamp: number, callback: any, callbackArgs: any) {
        this.elapsed = 0;
        this.active = 1;
        this.timestamp = timestamp;
        this.callback = callback;
        this.callbackArgs = callbackArgs;
    }

    public setCallbackArgs(args: any) {
        this.callbackArgs = args;
    }

    public setTimestamp(timestamp: any) {
        this.timestamp = timestamp;
    }

    public setActive(active: any) {
        this.active = active;
    }

    public setElapsed(elapsed: any) {
        this.elapsed = elapsed;
    }

    public setCallback(callback: any) {
        this.callback = callback;
    }

    public getCallbackArgs() {
        return this.callbackArgs;
    }

    public getCallback() {
        return this.callback;
    }

    public getTimeStamp() {
        return this.timestamp;
    }

    public getActive() {
        return this.active;
    }

    public getElapsed() {
        return this.elapsed;
    }

};