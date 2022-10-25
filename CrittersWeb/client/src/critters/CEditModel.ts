
export class CEditModel {

    scale: number = 10;
    X: number = 0;
    Y: number = 0;
    gridActual: boolean = false;

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
}
