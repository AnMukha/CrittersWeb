import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CPoint } from "./CrittersWorld";

@Injectable()
export class CEditModel {

    scale: number = 10;
    x: number = 0;
    y: number = 0;
    gridActual: boolean = false;    

    public readonly changesSubject: Subject<number> = new Subject();

    cellXToScr(x: number): number {
        return (x - this.x) * this.scale;
    }

    cellYToScr(y: number): number {
        return (y - this.y) * this.scale;
    }

    celldXToScr(dx: number) {
        return dx * this.scale;
    }

    celldYToScr(dy: number) {
        return dy * this.scale;
    }

    scrXToCell(x: number) {
        return this.x + x / this.scale;
    }

    ScrYToCell(y: number) {
        return this.y + y / this.scale;
    }

    scrdXToCell(x: number) {
        return x / this.scale;
    }

    scrdYToCell(y: number) {
        return y / this.scale;
    }

    cellXYInScr(x: number, y: number): CPoint {
        return new CPoint(Math.floor(this.scrXToCell(x)), Math.floor(this.ScrYToCell(y)));
    }

    getFramePos(): CPoint {
        return new CPoint(this.x, this.y)
    }

}
