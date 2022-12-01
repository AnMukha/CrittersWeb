import { Injectable } from "@angular/core";
import { CrittersWorld, WorldCangesType } from "./CrittersWorld";
import { ZeroTimeController } from "./ZeroTimeController";

@Injectable()
export class CTimeController {
    constructor(private world: CrittersWorld, private ztContorller: ZeroTimeController) {
    }

    speed: number = 0;
    timeForward: boolean = true;
    execTimer: NodeJS.Timeout | undefined = undefined;

    public step() {
        this.runSerie(1);
        this.world.notifyAboutChanges([WorldCangesType.Executed]);
        this.toOddStep();        
    }

    runSerie(stepCount: number) {        
        var stNum = this.world.getStepNum();
        for (let n = stNum; n < stNum + stepCount; n++) {
            if (this.world.isZeroTime())
                this.ztContorller.beforeZeroTimePass();
            this.world.runSerie(stepCount);
        }
    }

    public setSpeed(speed: number) {        
        this.speed = speed;
        if (this.execTimer)
            clearTimeout(this.execTimer);
        this.stepOnTimer();                          
        if (this.speed == 0)
            this.toOddStep();
    }    

    private stepOnTimer() {
        if (this.speed != 0) {
            let stepCount = 1;
            let interval = 1 / this.speed * 1000;
            if (interval < 20) {
                stepCount = Math.round(20/interval);
                interval = 20;                
            };
            this.runSerie(stepCount);
            this.world.notifyAboutChanges([WorldCangesType.Executed]);
            //if (!this.world.IsZeroTime()) 
            this.execTimer = setTimeout(() => this.stepOnTimer(), interval);
            //else {
                //this.speed = 0;
                //if (this.onZeroStateCallback)
                    //this.onZeroStateCallback();
            //}
        }
        else {
            if (this.execTimer)
                clearTimeout(this.execTimer);
            this.execTimer = undefined;
        }            
    }   

    private toOddStep() {        
        if (this.world.isEvenStep())
            setTimeout(() =>
            {                
                if (this.world.isEvenStep()) {                    
                    this.runSerie(1);
                    this.world.notifyAboutChanges([WorldCangesType.Executed]);
                }
            }, 500);    
    }

    public setTimeDirection(forward: boolean) {
        if (this.timeForward != forward)
            this.timeForward = forward;
        if (this.world.isForwardTimeDirection() != forward) {
            this.world.reverseTimeDirection();
            this.toOddStep();            
        }        
    }    

    //onZeroStateCallback!: () => void;

    //onZeroState(cb: () => void) {
        //this.onZeroStateCallback = cb;
    //}



}
