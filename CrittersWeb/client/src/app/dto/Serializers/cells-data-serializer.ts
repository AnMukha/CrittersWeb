import { Cell, CrittersWorld } from "../../critters/CrittersWorld";

export class CellsDataSerializer {


    public serializeCells(cells: IterableIterator<Cell>): number[] {
        let result = [];
        for (let c of cells) {
            result.push(c.x);
            result.push(c.y);
            result.push(c.heroId ?? -1);
        }
        return result;
    }    

    public deserializeCells(cellsData: number[], world: CrittersWorld) {        
        // serialyaer works with world directly for better performance
        for (let i = 0; i < cellsData.length; i = i + 3) {            
            world.addCell(cellsData[i], cellsData[i + 1], cellsData[i + 2]);
        }

    }
}