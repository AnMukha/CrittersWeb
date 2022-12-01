import { Injectable } from "@angular/core";
import { timeInterval } from "rxjs";
import { CrittersWorld, WorldCangesType } from "./CrittersWorld";
import { CWorldSnapshot } from "./CWorldSnapshot";

@Injectable()
export class ZeroTimeController {
    constructor(private world: CrittersWorld) {
        world.changesSubject.subscribe(ch => {
            if (ch.includes(WorldCangesType.CellsEditing) && !world.isZeroTime())
                this.wasEditedAtNotZeroTime = true;
            if (ch.includes(WorldCangesType.Loaded))
                this.wasEditedAtNotZeroTime = false;
            if (ch.includes(WorldCangesType.CellsEditing) && world.isZeroTime())
                this.wasEditedAtZeroTime = true;            
        });
    }

    snapshot: CWorldSnapshot | undefined;
    wasEditedAtNotZeroTime: boolean = false;
    wasEditedAtZeroTime: boolean = false;

    public setThisTimeAsZero() {        
        if (this.world.isEvenStep())
            return;
        this.snapshot = this.world.makeSnapshot();        
        this.world.setThisTimeAsZero();
        this.world.notifyAboutChanges([WorldCangesType.Loaded]);
    }

    public goToZeroTime() {        
        if (this.wasEditedAtNotZeroTime) {
            this.world.notifyAboutChanges([WorldCangesType.Executed]);
            this.world.runToZeroTime();
            this.snapshot = this.world.makeSnapshot();
            this.wasEditedAtZeroTime = false;
            this.wasEditedAtNotZeroTime = false;
        }
        else if (this.snapshot) {
            this.world.loadSnapshot(this.snapshot);
            this.wasEditedAtZeroTime = false;            
            this.wasEditedAtNotZeroTime = false;
            this.world.notifyAboutChanges([WorldCangesType.Loaded]);
        }                
    }

    public beforeZeroTimePass() {
        if (!this.world.isZeroTime() || !this.world.isForwardTimeDirection())
            return;
        if (this.wasEditedAtZeroTime) {
            this.snapshot = this.world.makeSnapshot();
            this.wasEditedAtZeroTime = false;
        }
        
    }


}