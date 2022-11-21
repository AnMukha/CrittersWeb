import { Injectable } from "@angular/core";
import { Cell } from "./CrittersWorld";


@Injectable()
export class CWorldSnapshot {
    public cells: Cell[] = [];
}
