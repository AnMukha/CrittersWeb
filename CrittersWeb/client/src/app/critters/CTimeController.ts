import { Injectable } from "@angular/core";
import { CrittersWorld, WorldCangesType } from "./CrittersWorld";

@Injectable()
export class CTimeController {
    constructor(private world: CrittersWorld) {
    }

    speed: number = 0;
    timeForward: boolean = true;
    execTimer: NodeJS.Timeout | undefined = undefined;

    public step() {
        this.world.RunSerie(1);
        this.world.notifyAboutChanges([WorldCangesType.executed]);
        this.toOddStep();
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
            this.world.RunSerie(1);            
            this.world.notifyAboutChanges([WorldCangesType.executed]);
            if (!this.world.IsZeroTime())
                this.execTimer = setTimeout(() => this.stepOnTimer(), 1 / this.speed * 1000);
            else {
                this.speed = 0;
                if (this.onZeroStateCallback)
                    this.onZeroStateCallback();
            }
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
                    this.world.RunSerie(1);
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

    onZeroStateCallback!: () => void;

    onZeroState(cb: () => void) {
        this.onZeroStateCallback = cb;
    }



}
