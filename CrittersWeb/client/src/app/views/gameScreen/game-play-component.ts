import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { lastValueFrom } from "rxjs";
import { CrittersEditController } from "../../critters/CEditController/CrittersEditController";
import { SandBoxCrittersEditController } from "../../critters/CEditController/SandBoxCrittersEditController";
import { CEditModel } from "../../critters/CEditModel";
import { CrittersView } from "../../critters/CrittersView";
import { CrittersWorld } from "../../critters/CrittersWorld";
import { CTimeController } from "../../critters/CTimeController";
import { ZeroTimeController } from "../../critters/ZeroTimeController";
import { GameWorldLocalAreaDto } from "../../dto/game/GameWorldLocalAreaDto";
import { GameWorldLoader } from "./game-world-loader";

@Component({
    selector: 'game-play',
    templateUrl: "game-play-component.html",
    styles: [
    ],
    providers: [CrittersWorld, { provide: CrittersEditController, useClass: SandBoxCrittersEditController }, CEditModel, CrittersView, CTimeController, ZeroTimeController]
})
export class GamePlayComponent implements OnInit {

    constructor(private world: CrittersWorld, private zeroTimeController: ZeroTimeController, private ec: CrittersEditController,
        private http: HttpClient, private route: ActivatedRoute) {
    }

    async ngOnInit() {
        console.log("game init");
        this.loadWorld();
    }

    async loadWorld() {
        this.route.params.subscribe(routeParams => {
            let worldId: string = (routeParams as any).id;
            let url = worldId.toLowerCase() == "main" ? "/gameworld/getmainworld" : "/getworld/" + worldId;
            this.http.get<GameWorldLocalAreaDto>(url).subscribe(async w => {
                this.deserializeWorld(w);
        });
    });    
}
    deserializeWorld(world: GameWorldLocalAreaDto) {
        let loader = new GameWorldLoader();
        loader.LoadWorldFromDto(world, this.world);
    }

}

