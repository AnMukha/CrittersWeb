import { Component, OnInit } from "@angular/core";
import { CrittersEditController } from "../../critters/CEditController/CrittersEditController";
import { SandBoxCrittersEditController } from "../../critters/CEditController/SandBoxCrittersEditController";
import { CEditModel } from "../../critters/CEditModel";
import { CrittersView } from "../../critters/CrittersView";
import { CrittersWorld } from "../../critters/CrittersWorld";
import { CTimeController } from "../../critters/CTimeController";
import { ZeroTimeController } from "../../critters/ZeroTimeController";

@Component({
    selector: 'game-play',
    templateUrl: "game-play-component.html",
    styles: [
    ],
    providers: [CrittersWorld, { provide: CrittersEditController, useClass: SandBoxCrittersEditController }, CEditModel, CrittersView, CTimeController, ZeroTimeController]
})
export class GamePlayComponent implements OnInit {

    constructor(private world: CrittersWorld, private zeroTimeController: ZeroTimeController, private ec: CrittersEditController) {
    }

    async ngOnInit() {
        LoadWorld();
    }

}

function LoadWorld() {
    
}
