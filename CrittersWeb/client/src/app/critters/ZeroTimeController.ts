import { Injectable } from "@angular/core";
import { timeInterval } from "rxjs";
import { CrittersWorld, WorldCangesType } from "./CrittersWorld";
import { CWorldSnapshot } from "./CWorldSnapshot";

@Injectable()
export class ZeroTimeController {
    constructor(private world: CrittersWorld) {
        world.subscribeToChanges(ch => {
            if (ch == WorldCangesType.edited && !world.IsZeroTime())
                this.wasEditedAtNotZeroTime = true;
            if (ch == WorldCangesType.loaded)
                this.wasEditedAtNotZeroTime = false;
        });
    }

    snapshot: CWorldSnapshot | undefined;
    wasEditedAtNotZeroTime: boolean = false;

    public setThisTimeAsZero() {        
        if (this.world.IsEvenStep())
            return;
        this.snapshot = this.world.MakeSnapshot();
        this.world.SetThisTimeAsZero();
        this.world.notifyAboutChanges(WorldCangesType.loaded);
    }

    public goToZeroTime() {
        // console.log("dddddddddddddddd");
        if (this.wasEditedAtNotZeroTime)
            this.world.RunToZeroTime();
        else if (this.snapshot)        
            this.world.LoadSnapshot(this.snapshot);
        this.world.notifyAboutChanges(WorldCangesType.loaded);
        this.wasEditedAtNotZeroTime = false;
    }



}