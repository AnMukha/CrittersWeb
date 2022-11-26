import { Injectable } from "@angular/core";
import { timeInterval } from "rxjs";
import { CrittersWorld, WorldCangesType } from "./CrittersWorld";
import { CWorldSnapshot } from "./CWorldSnapshot";

@Injectable()
export class ZeroTimeController {
    constructor(private world: CrittersWorld) {
        world.changesSubject.subscribe(ch => {
            if (ch.includes(WorldCangesType.cellsEditing) && !world.IsZeroTime())
                this.wasEditedAtNotZeroTime = true;
            if (ch.includes(WorldCangesType.loaded))
                this.wasEditedAtNotZeroTime = false;
            if (ch.includes(WorldCangesType.cellsEditing) && world.IsZeroTime())
                this.wasEditedAtZeroTime = true;            
        });
    }

    snapshot: CWorldSnapshot | undefined;
    wasEditedAtNotZeroTime: boolean = false;
    wasEditedAtZeroTime: boolean = false;

    public setThisTimeAsZero() {        
        if (this.world.IsEvenStep())
            return;
        this.snapshot = this.world.MakeSnapshot();        
        this.world.SetThisTimeAsZero();
        this.world.notifyAboutChanges([WorldCangesType.loaded]);
    }

    public goToZeroTime() {        
        if (this.wasEditedAtNotZeroTime) {
            this.world.notifyAboutChanges([WorldCangesType.executed]);
            this.world.RunToZeroTime();
            this.snapshot = this.world.MakeSnapshot();
            this.wasEditedAtZeroTime = false;
            this.wasEditedAtNotZeroTime = false;
        }
        else if (this.snapshot) {
            this.world.LoadSnapshot(this.snapshot);
            this.wasEditedAtZeroTime = false;            
            this.wasEditedAtNotZeroTime = false;
            this.world.notifyAboutChanges([WorldCangesType.loaded]);
        }                
    }

    public beforeZeroTimePass() {
        if (!this.world.IsZeroTime() || !this.world.isForwardTimeDirection())
            return;
        if (this.wasEditedAtZeroTime) {
            this.snapshot = this.world.MakeSnapshot();
            this.wasEditedAtZeroTime = false;
        }
        
    }


}