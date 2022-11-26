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
        this.RunSerie(1);
        this.world.notifyAboutChanges([WorldCangesType.executed]);
        this.toOddStep();        
    }

    RunSerie(stepCount: number) {        
        var stNum = this.world.GetStepNum();
        for (let n = stNum; n < stNum + stepCount; n++) {
            if (this.world.IsZeroTime())
                this.ztContorller.beforeZeroTimePass();
            this.world.RunSerie(stepCount);
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
            this.RunSerie(stepCount);
            this.world.notifyAboutChanges([WorldCangesType.executed]);
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
        if (this.world.IsEvenStep())
            setTimeout(() =>
            {                
                if (this.world.IsEvenStep()) {                    
                    this.RunSerie(1);
                    this.world.notifyAboutChanges([WorldCangesType.executed]);
                }
            }, 500);    
    }

    public setTimeDirection(forward: boolean) {
        if (this.timeForward != forward)
            this.timeForward = forward;
        if (this.world.isForwardTimeDirection() != forward) {
            this.world.ReverseTimeDirection();
            this.toOddStep();            
        }        
    }    

    //onZeroStateCallback!: () => void;

    //onZeroState(cb: () => void) {
        //this.onZeroStateCallback = cb;
    //}



}
