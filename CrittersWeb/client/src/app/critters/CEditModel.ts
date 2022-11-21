import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CPoint } from "./CrittersWorld";

@Injectable()
export class CEditModel {

    scale: number = 10;
    X: number = 0;
    Y: number = 0;
    gridActual: boolean = false;

    changesSubject: Subject<number> = new Subject();

    public subscribeToChanges(next: (value: number) => void) {
        this.changesSubject.subscribe(next);
    }

    CellXToScr(x: number): number {
        return (x - this.X) * this.scale;
    }

    CellYToScr(y: number): number {
        return (y - this.Y) * this.scale;
    }

    CelldXToScr(dx: number) {
        return dx * this.scale;
    }

    CelldYToScr(dy: number) {
        return dy * this.scale;
    }

    ScrXToCell(x: number) {
        return this.X + x / this.scale;
    }

    ScrYToCell(y: number) {
        return this.Y + y / this.scale;
    }

    ScrdXToCell(x: number) {
        return x / this.scale;
    }

    ScrdYToCell(y: number) {
        return y / this.scale;
    }

    CellXYInScr(x: number, y: number): CPoint {
        return new CPoint(Math.floor(this.ScrXToCell(x)), Math.floor(this.ScrYToCell(y)));
    }

    GetFramePos(): CPoint {
        return new CPoint(this.X, this.Y)
    }

}
