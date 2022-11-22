﻿import { Injectable } from "@angular/core";
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

    private nextCellKey: number = 0;
    
    private changesSubject: Subject<WorldCangesType[]> = new Subject();    

    public AddCell(x: number, y: number): Cell {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let resultCell = new Cell(this.NextCellKey(), x, y, this.stepNum);
        this.cells.set(key, resultCell);
        return resultCell;
    }

    public getCells(): IterableIterator<Cell> {
        return this.cells.values();
    }

    private NextCellKey(): number {
        this.nextCellKey++;
        return this.nextCellKey;
    }

    public notifyAboutChanges(changeTypes: WorldCangesType[]) {
        if (changeTypes.includes(WorldCangesType.cellsEditing))
            this.modified = true;
        this.changesSubject.next(changeTypes);
    }

    public resetModificationFlag() {
        this.modified = false;
    }

    public wasModified(): boolean {
        return this.modified;
    }

    public subscribeToChanges(next: (value: WorldCangesType[]) => void) {
        this.changesSubject.subscribe(next);
    }
            
    // Очистить клетку, если занята        
    public ClearCell(x: number, y: number) {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let c = this.cells.get(key);
        if (c)
            this.RemoveCell(key, c);
    }

    private RemoveCell(key: number, cl: Cell) {
        this.cells.delete(key);
    }


    public IsEvenStep(): boolean {
        return this.stepNum % 2 == 0;
    }

    public RunSerie(stepCnt: number) {
        for (let i = 0; i < stepCnt; i++)
            this.Run();
    }

    public Clear() {
        this.cells.clear();
        this.nextCellKey = 0;
        this.stepNum = 1;
    }

    public ReverseTimeDirection() {
        if (this.forward)
            this.stepNum--;
        else
            this.stepNum++;
        this.forward = !this.forward;
    }

    public isForwardTimeDirection() {
        return this.forward;
    }

    private Run() {
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

    public GetCellsCount(): number {
        return this.cells.size;
    }

    public GetCell(x: number, y: number): Cell | undefined {        
        return this.cells.get(x * Cell.KEY_GEN_FACTOR + y);
    }

    public FindInArea(rectangle: CRect): Cell[] {
        let result: Cell[] = [];
        for (let c of this.cells.entries()) {
            let cell = c[1];
            if (rectangle.ContainsInXY(cell.x, cell.y))
                result.push(cell);
        }
        return result;
    }

    public DeleteCells(deleted: Cell[]) {        
        for (let c of deleted) 
            this.cells.delete(c.GetKey());
    }

    public MoveCellsTo(cls: Cell[], dx: number, dy: number) {
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

    public SetThisTimeAsZero() {
        if (this.stepNum == 1)
            return;
        this.stepNum = 1;
        this.forward = true;
        for (let c of this.cells.values())
            c.prosessedStep = 1;
    }

    public IsZeroTime(): boolean {
        return this.stepNum == 1;
    }

    public RunToZeroTime() {
        if (!this.forward) {
            this.ReverseTimeDirection();
            if (this.IsEvenStep())
                this.RunSerie(1);
        }
        if (this.stepNum == 1)
            return;
        let distToZero = Math.abs(this.stepNum - 1);        
        if (this.stepNum > 1) 
            this.ReverseTimeDirection();
         this.RunSerie(distToZero);
         this.SetThisTimeAsZero();
    }

    public MakeSnapshot(): CWorldSnapshot {        
        let resultCells: Cell[] = [];
        for (let value of this.cells.values()) {
            resultCells.push(value.Clone());
        }        
        return { cells: resultCells };
    }

    public LoadSnapshot(snapshot: CWorldSnapshot) {
        this.Clear();
        this.stepNum = 1;
        this.forward = true;
        for (let c of snapshot.cells) {
            c.prosessedStep = this.stepNum;
            this.cells.set(c.x * Cell.KEY_GEN_FACTOR + c.y, c.Clone());
        }
    }

    public TestInit() {
        this.AddCell(10, 10);
        this.AddCell(11, 11);
        this.AddCell(10, 11);
        this.AddCell(12, 11);
    }


}

export class CrittersWorldSerializer {

    public SerializeCells(w: CrittersWorld): number[] {
        let result = [];
        for (let c of w.getCells()) {            
            result.push(c.x);
            result.push(c.y);
        }
        return result;
    }

    public DeserializeCells(cellsData: number[], cw: CrittersWorld) {        
        for (let n = 0; n < cellsData.length; n=n+2) {
            cw.AddCell(cellsData[n], cellsData[n + 1]);
        }
    }
}

export class Cell {
    public constructor(id: number, x: number, y: number, procStep: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.prosessedStep = procStep;
    }

    public static KEY_GEN_FACTOR = 1000000000;
    
    // Уникальный ключ    
    public id: number;

    public x: number;
    public y: number;
    public prosessedStep: number;
 
    public GetKey(): number
    {
        return this.x * Cell.KEY_GEN_FACTOR + this.y;
    }

    public MoveTo(toX: number, toY: number)
    {
        this.x = toX;
        this.y = toY;
    }

    public Clone(): Cell {
        return new Cell(this.id, this.x, this.y, this.prosessedStep);
    }


}

export class CRect {
    public constructor(x: number, y: number, width: number, height: number) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
    }

    public Width: number;
    public Height: number;
    public X: number;
    public Y: number;

    public GetTop(): number { return this.Y; }
    public GetRight(): number { return this.X + this.Width; }
    public GetLeft(): number { return this.X; }
    public GetBottom(): number { return this.Y + this.Height; }

    public ContainsInXY(x: number, y: number): boolean {
        return x >= this.X && x < this.X + this.Width && y >= this.Y && y < this.Y + this.Height;
    }

    public Contains(p: CPoint): boolean {
        return p.X >= this.X && p.X < this.X + this.Width && p.Y >= this.Y && p.Y < this.Y + this.Height;
    }
}

export class CPoint {
    public constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }
    public X: number;
    public Y: number;

    public dist(p: CPoint) {
        return Math.sqrt((this.X - p.X) * (this.X - p.X) + (this.Y - p.Y) * (this.Y - p.Y));
    }

}

export enum WorldCangesType {
    cellsEditing,
    frameChanging,
    toolsChanging,
    loaded,
    executed
}