import { Injectable } from "@angular/core";
import { Subject, timeInterval } from "rxjs";
import { CWorldSnapshot } from "./CWorldSnapshot";


@Injectable()
export class CrittersWorld {
    
    constructor() {
    }

    private cells: Map<number, Cell> = new Map<number, Cell>();    

    private stepNum: number = 1;
    private forward: boolean = true;
    private modified: boolean = false;

    private cellKeyGen: number = 0;
    
    public readonly changesSubject: Subject<WorldCangesType[]> = new Subject();    

    public addCell(x: number, y: number, heroId: number|null): Cell {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let resultCell = new Cell(this.nextCellKey(), x, y, heroId, this.stepNum);
        this.cells.set(key, resultCell);
        return resultCell;
    }

    public getCells(): IterableIterator<Cell> {
        return this.cells.values();
    }

    private nextCellKey(): number {
        this.cellKeyGen++;
        return this.cellKeyGen;
    }

    public notifyAboutChanges(changeTypes: WorldCangesType[]) {
        if (changeTypes.includes(WorldCangesType.CellsEditing))
            this.modified = true;
        this.changesSubject.next(changeTypes);
    }

    public resetModificationFlag() {
        this.modified = false;
    }

    public wasModified(): boolean {
        return this.modified;
    }
            
    // Очистить клетку, если занята        
    public clearCell(x: number, y: number) {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let c = this.cells.get(key);
        if (c)
            this.removeCell(key, c);
    }

    private removeCell(key: number, cl: Cell) {
        this.cells.delete(key);
    }


    public isEvenStep(): boolean {
        return this.stepNum % 2 == 0;
    }

    public getStepNum() {
        return this.stepNum;
    }

    public runSerie(stepCnt: number) {
        for (let i = 0; i < stepCnt; i++)
            this.run();
    }

    public clear() {
        this.cells.clear();
        this.cellKeyGen = 0;
        this.stepNum = 1;
    }

    public reverseTimeDirection() {
        if (this.forward)
            this.stepNum--;
        else
            this.stepNum++;
        this.forward = !this.forward;
    }

    public isForwardTimeDirection() {
        return this.forward;
    }

    private run() {
        if (this.forward)
            this.stepNum++;
        else
            this.stepNum--;
        let evenStep = this.stepNum % 2 == 0;
        for (let c_e of this.cells.entries()) {
            let c = c_e[1];
            if (c.prosessedStep != this.stepNum) {
                let xc = c.x;
                let yc = c.y;
                    // позиция ячейки
                let xgc = xc - (((xc % 2 == 0) == evenStep) ? 0 : 1);
                let ygc = yc - (((yc % 2 == 0) == evenStep) ? 0 : 1);
                // другие клетки в ячейке
                let gc00: Cell | undefined;
                let gc11: Cell | undefined;
                let gc01: Cell | undefined;
                let gc10: Cell | undefined;
                let c00: boolean = false, c11: boolean = false, c01: boolean = false, c10: boolean = false;
                gc00 = this.cells.get(xgc * Cell.KEY_GEN_FACTOR + ygc);
                c00 = gc00 != undefined;
                gc11 = this.cells.get((xgc + 1) * Cell.KEY_GEN_FACTOR + (ygc + 1));
                c11 = gc11 != undefined;
                gc01 = this.cells.get(xgc * Cell.KEY_GEN_FACTOR + (ygc + 1));
                c01 = gc01 != undefined;
                gc10 = this.cells.get((xgc + 1) * Cell.KEY_GEN_FACTOR + ygc);
                c10 = gc10 != undefined;
                // определить действие в зависимости от положения 
                let cellCnt = (gc00 == null ? 0 : 1) + (gc11 == null ? 0 : 1) + (gc01 == null ? 0 : 1) + (gc10 == null ? 0 : 1);
                if (cellCnt == 1) {
                    // это единственная ячейка - двигать на нечетных шагах по диагонали
                    if (!evenStep) {
                        if (xgc == xc)
                            c.x++;
                        else
                            c.x--;
                        if (ygc == yc)
                            c.y++;
                        else
                            c.y--;
                    }
                }
                else if (cellCnt == 2) {
                    // две ячейки: 6 вариантов инверсии
                    if (c00 && c00 == c11) {
                        // 10
                        // 01
                        gc00!.x++;
                        gc11!.x--;
                    }
                    else if (c01 && c01 == c10) {
                        // 01
                        // 10
                        gc01!.x++;
                        gc10!.x--;
                        //gc01.y--;
                        //gc10.y++;
                    }
                    else if (c00 && c00 == c10) {
                        // 11
                        // 00
                        gc00!.y++;
                        gc10!.y++;
                    }
                    else if (c01 && c01 == c11) {
                        // 00
                        // 11
                        gc01!.y--;
                        gc11!.y--;
                    }
                    else if (c00 && c00 == c01) {
                        // 10
                        // 10
                        gc00!.x++;
                        gc01!.x++;
                    }
                    else {
                        // 01
                        // 01
                        gc10!.x--;
                        gc11!.x--;
                    }
                }
                else if (cellCnt == 3) {
                    if (evenStep) {
                        if (!c00) {
                            gc11!.x--;
                            gc11!.y--;
                        }
                        else if (!c11) {
                            gc00!.x++;
                            gc00!.y++;
                        }
                        else if (!c01) {
                            gc10!.x--;
                            gc10!.y++;
                        }
                        else {
                            gc01!.x++;
                            gc01!.y--;
                        }
                    }
                }

                if (c00)
                    gc00!.prosessedStep = this.stepNum;
                if (c11)
                    gc11!.prosessedStep = this.stepNum;
                if (c01)
                    gc01!.prosessedStep = this.stepNum;
                if (c10)
                    gc10!.prosessedStep = this.stepNum;
            }
        }
        let cellsNew = new Map<number, Cell>();
        for (let c_e of this.cells.entries()) {
            let c = c_e[1];
            cellsNew.set(c.x * Cell.KEY_GEN_FACTOR + c.y, c);
        }
        this.cells = cellsNew;        
    }

    public getCellsCount(): number {
        return this.cells.size;
    }

    public getCell(x: number, y: number): Cell | undefined {        
        return this.cells.get(x * Cell.KEY_GEN_FACTOR + y);
    }

    public findInArea(rectangle: CRect): Cell[] {
        let result: Cell[] = [];
        for (let c of this.cells.entries()) {
            let cell = c[1];
            if (rectangle.containsInXY(cell.x, cell.y))
                result.push(cell);
        }
        return result;
    }

    public deleteCells(deleted: Cell[]) {        
        for (let c of deleted) 
            this.cells.delete(c.getKey());
    }

    public moveCellsTo(cls: Cell[], dx: number, dy: number) {
        /*foreach(var c in cls)
        cells.Remove(c.GetKey());
        foreach(var c in cls)
        {
            c.x += dx;
            c.y += dy;
        }
        foreach(var c in cls)
        cells.Add(c.GetKey(), c);*/
    }

    public setThisTimeAsZero() {
        if (this.stepNum == 1)
            return;
        this.stepNum = 1;
        this.forward = true;
        for (let c of this.cells.values())
            c.prosessedStep = 1;
    }

    public isZeroTime(): boolean {
        return this.stepNum == 1;
    }

    public runToZeroTime() {
        if (!this.forward) {
            this.reverseTimeDirection();
            if (this.isEvenStep())
                this.runSerie(1);
        }
        if (this.stepNum == 1)
            return;
        let distToZero = Math.abs(this.stepNum - 1);        
        if (this.stepNum > 1) 
            this.reverseTimeDirection();
         this.runSerie(distToZero);
         this.setThisTimeAsZero();
    }

    public makeSnapshot(): CWorldSnapshot {        
        let resultCells: Cell[] = [];
        for (let value of this.cells.values()) {
            resultCells.push(value.clone());
        }        
        return { cells: resultCells };
    }

    public loadSnapshot(snapshot: CWorldSnapshot) {
        this.clear();
        this.stepNum = 1;
        this.forward = true;
        for (let c of snapshot.cells) {
            c.prosessedStep = this.stepNum;
            this.cells.set(c.x * Cell.KEY_GEN_FACTOR + c.y, c.clone());
        }
    }

    public testInit() {
        this.addCell(10, 10, null);
        this.addCell(11, 11, null);
        this.addCell(10, 11, null);
        this.addCell(12, 11, null);
    }
}

export class Cell {
    public constructor(id: number, x: number, y: number, heroId: number|null, procStep: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.heroId = heroId;
        this.prosessedStep = procStep;
    }

    public static KEY_GEN_FACTOR = 1000000000;
    
    // Уникальный ключ    
    public id: number;

    public x: number;
    public y: number;
    public heroId: number|null;

    public prosessedStep: number;
 
    public getKey(): number
    {
        return this.x * Cell.KEY_GEN_FACTOR + this.y;
    }

    public moveTo(toX: number, toY: number)
    {
        this.x = toX;
        this.y = toY;
    }

    public clone(): Cell {
        return new Cell(this.id, this.x, this.y, this.heroId, this.prosessedStep);
    }


}

export class CRect {
    public constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public width: number;
    public height: number;
    public x: number;
    public y: number;

    public getTop(): number { return this.y; }
    public getRight(): number { return this.x + this.width; }
    public getLeft(): number { return this.x; }
    public getBottom(): number { return this.y + this.height; }

    public containsInXY(x: number, y: number): boolean {
        return x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height;
    }

    public contains(p: CPoint): boolean {
        return p.x >= this.x && p.x < this.x + this.width && p.y >= this.y && p.y < this.y + this.height;
    }
}

export class CPoint {
    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public x: number;
    public y: number;

    public dist(p: CPoint) {
        return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
    }

}

export enum WorldCangesType {
    CellsEditing,
    FrameChanging,
    ToolsChanging,
    Loaded,
    Executed
}