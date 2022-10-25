export class CrittersWorld {
    constructor() {
        this.cells = new Map();
        this.AddAxisX = 0;
        this.AddAxisY = 0;
        this.nextCellKey = 0;
        this.stepNum = 0;
    }
    AddCell(x, y) {
        let key = x * 1000000000 + y;
        let resultCell = new Cell(this.NextCellKey(), x, y, this.stepNum);
        this.cells.set(key, resultCell);
        return resultCell;
    }
    NextCellKey() {
        this.nextCellKey++;
        return this.nextCellKey;
    }
    // Очистить клетку, если занята        
    ClearCell(x, y) {
        let key = x * 1000000000 + y;
        let c = this.cells.get(key);
        if (c)
            this.RemoveCell(key, c);
    }
    RemoveCell(key, cl) {
        this.cells.delete(key);
    }
    SetAdditionalAxis(xA, yA) {
        this.AddAxisX = xA;
        this.AddAxisY = yA;
    }
    IsEvenStep() {
        return this.stepNum % 2 == 0;
    }
    EvenState() {
        return this.stepNum % 2 == 0;
    }
    RunSerie(stepCnt) {
        for (let i = 0; i < stepCnt; i++)
            this.Run();
    }
    Clear() {
        this.cells.clear();
        this.nextCellKey = 0;
        this.stepNum = 0;
    }
    ReverseTimeDirection() {
        this.stepNum++;
    }
    Run() {
        this.stepNum++;
        /*foreach(var c in cells)
        if (c.Value.prosessedStep != stepNum) {
            var xc = c.Value.x;
            var yc = c.Value.y;
                    // позиция ячейки
                    int xgc = xc - (((xc % 2 == 0) == evenStep) ? 0 : 1);
                    int ygc = yc - (((yc % 2 == 0) == evenStep) ? 0 : 1);
                    // другие клетки в ячейке
                    Cell gc00, gc11, gc01, gc10;
                    bool c00 = false, c11 = false, c01 = false, c10 = false;
            if (cells.TryGetValue((long)(xgc) * 1000000000 + (ygc), out gc00))
                c00 = true;
            if (cells.TryGetValue((long)(xgc + 1) * 1000000000 + (ygc + 1), out gc11))
                c11 = true;
            if (cells.TryGetValue((long)(xgc) * 1000000000 + (ygc + 1), out gc01))
                c01 = true;
            if (cells.TryGetValue((long)(xgc + 1) * 1000000000 + (ygc), out gc10))
                c10 = true;
                    // определить действие в зависимости от положения
                    int cellCnt = (gc00 == null ? 0 : 1) + (gc11 == null ? 0 : 1) + (gc01 == null ? 0 : 1) + (gc10 == null ? 0 : 1);
            if (cellCnt == 1) {
                // это единственная ячейка - двигать на нечетных шагах по диагонали
                if (!evenStep) {
                    if (xgc == xc)
                        c.Value.x++;
                    else
                        c.Value.x--;
                    if (ygc == yc)
                        c.Value.y++;
                    else
                        c.Value.y--;
                }
            }
            else if (cellCnt == 2) {
                // две ячейки: 6 вариантов инверсии
                if (c00 && c00 == c11) {
                    // 10
                    // 01
                    gc00.x++;
                    gc11.x--;
                }
                else if (c01 && c01 == c10) {
                    // 01
                    // 10
                    gc01.x++;
                    gc10.x--;
                    //gc01.y--;
                    //gc10.y++;
                }
                else if (c00 && c00 == c10) {
                    // 11
                    // 00
                    gc00.y++;
                    gc10.y++;
                }
                else if (c01 && c01 == c11) {
                    // 00
                    // 11
                    gc01.y--;
                    gc11.y--;
                }
                else if (c00 && c00 == c01) {
                    // 10
                    // 10
                    gc00.x++;
                    gc01.x++;
                }
                else {
                    // 01
                    // 01
                    gc10.x--;
                    gc11.x--;
                }
            }
            else if (cellCnt == 3) {
                if (evenStep) {
                    if (!c00) {
                        gc11.x--;
                        gc11.y--;
                    }
                    else if (!c11) {
                        gc00.x++;
                        gc00.y++;
                    }
                    else if (!c01) {
                        gc10.x--;
                        gc10.y++;
                    }
                    else {
                        gc01.x++;
                        gc01.y--;
                    }
                }
            }

            if (c00)
                gc00.prosessedStep = stepNum;
            if (c11)
                gc11.prosessedStep = stepNum;
            if (c01)
                gc01.prosessedStep = stepNum;
            if (c10)
                gc10.prosessedStep = stepNum;
        }
        var cellsNew = new Dictionary<long, Cell>();
        foreach(var c in cells)
        cellsNew.Add((long)c.Value.x * 1000000000 + c.Value.y, c.Value);
        cells = cellsNew;
        */
    }
    GetCellsCount() {
        return this.cells.size;
    }
    GetCell(x, y) {
        return this.cells.get(x * 1000000000 + y);
    }
    FindInArea(rectangle) {
        let result = [];
        for (let c of this.cells.entries()) {
            let cell = c[1];
            if (rectangle.ContainsInXY(cell.x, cell.y))
                result.push(cell);
        }
        return result;
    }
    DeleteCells(deleted) {
        for (let c of deleted)
            this.cells.delete(c.GetKey());
    }
}
export class Cell {
    constructor(id, x, y, procStep) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.prosessedStep = procStep;
    }
    GetKey() {
        return this.x * 1000000000 + this.y;
    }
    MoveTo(toX, toY) {
        this.x = toX;
        this.y = toY;
    }
}
export class CRect {
    constructor(x, y, width, height) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
    }
    GetTop() { return this.Y; }
    GetRight() { return this.X + this.Width; }
    GetLeft() { return this.X; }
    GetBottom() { return this.Y + this.Height; }
    ContainsInXY(x, y) {
        return x >= this.X && x < this.X + this.Width && y >= this.Y && y < this.Y + this.Height;
    }
    Contains(p) {
        return p.X >= this.X && p.X < this.X + this.Width && p.Y >= this.Y && p.Y < this.Y + this.Height;
    }
}
export class CPoint {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }
}
//# sourceMappingURL=CrittersWorld.js.map