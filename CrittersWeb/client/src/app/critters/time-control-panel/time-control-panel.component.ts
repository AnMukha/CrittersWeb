import { Component, OnInit } from '@angular/core';
import { CrittersWorld } from '../CrittersWorld';
import { CTimeController } from '../CTimeController';
import { ZeroTimeController } from '../ZeroTimeController';

@Component({
    selector: 'app-time-control-panel',
    templateUrl: 'time-control-panel.component.html',
    styleUrls: ["time-control-panel.component.css"]
})
export class TimeControlPanelComponent implements OnInit {

    constructor(private timeController: CTimeController, private zeroTimeController: ZeroTimeController, private world: CrittersWorld) {
    }

    ngOnInit(): void {
        /*this.timeController.onZeroState(() => {
            this.speed = 0;
            this.timeController.setSpeed(0)
        }
        );*/
    }

    readonly MAX_SPEED = 1030;

    public speed: number = 0;

    public timeDirectionForward: boolean = true;

    onStepOrStop() {
        if (this.speed == 0) {
            this.timeController.step();
        }
        else {
            this.speed = 0;
            this.timeController.setSpeed(0)
        }
    }

    onRunOrFaster() {
        if (this.speed == 0)
            this.speed = 1;
        else {            
            if (this.speed * 2 <= this.MAX_SPEED)
                this.speed = this.speed * 2;
        }
        this.timeController.setSpeed(this.speed);
    }

    onReverseTime() {
        console.log("onReverseTime");
        this.timeDirectionForward = !this.timeDirectionForward;
        this.timeController.setTimeDirection(this.timeDirectionForward);
    }

    onToStart() {
        this.speed = 0;
        this.timeController.setSpeed(0);
        this.timeDirectionForward = true;
        this.timeController.timeForward = true;       
        this.zeroTimeController.goToZeroTime();
    }



}
