import { CrittersWorld } from "../../critters/CrittersWorld";
import { GameWorldLocalAreaDto } from "../../dto/game/GameWorldLocalAreaDto";
import { CellsDataSerializer } from "../../dto/Serializers/cells-data-serializer";

export class GameWorldLoader {

    cellsDataSerializer: CellsDataSerializer;

    constructor() {
        this.cellsDataSerializer = new CellsDataSerializer();
    }

    LoadWorldFromDto(worldDto: GameWorldLocalAreaDto, world: CrittersWorld) {
        world.clear();
        this.areasCellsToWorld(worldDto, world);
        this.currentHeroToWorld();
        this.otherHeroesToWorld();
    }

    areasCellsToWorld(worldDto: GameWorldLocalAreaDto, world: CrittersWorld) {
        for (let area of worldDto.localSpaceAreas) 
            this.cellsDataSerializer.deserializeCells(area.cellsData, world);                    
    }

    currentHeroToWorld() {
    
    }

    otherHeroesToWorld() {
    
    }

   

}