import { Injectable } from "@angular/core";
import { CEditControllerBase } from "./CEditControllerBase";
import { CEditModel } from "./CEditModel";
import { CPoint, CrittersWorld, WorldCangesType } from "./CrittersWorld";


@Injectable()
export class CEditController extends CEditControllerBase {

    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {  
        super();
        this.scrollRule = new ScrollRule(editModel);
        this.editCellRule = new EditCellRule(cWorld, editModel);
        this.wheelRule = new WheelRule(editModel);
        this.touchScrollRule = new TouchScrollRule(cWorld, editModel);
    }

    scrollRule: ScrollRule;
    editCellRule: EditCellRule;
    wheelRule: WheelRule;
    touchScrollRule: TouchScrollRule;

    public override mouseDownHandler(event: any) {
        let changings: WorldCangesType[] = [];
        changings.push(...this.editCellRule.onMouseDown(event));            
        changings.push(...this.scrollRule.onMouseDown(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override mouseUpHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.editCellRule.onMouseUp(event));       
        changings.push(...this.scrollRule.onMouseUp(event));        
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override mouseMoveHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.scrollRule.onMouseMove(event));        
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }


    public override touchStartHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchStart(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override touchEndHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchEnd(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override touchMoveHandler(event: any) {
        let changings: WorldCangesType[] = [];        
        changings.push(...this.touchScrollRule.onTouchMove(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }

    public override mouseWheelHandler(event: any) {        
        let changings: WorldCangesType[] = [];        
        changings.push(...this.wheelRule.onWheel(event));            
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    
}

class ScrollRule {
    constructor(private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;

    onMouseDown(event: any): WorldCangesType[] {
        this.startPos = new CPoint(event.offsetX, event.offsetY);
        this.startFramePos = this.editModel.GetFramePos();
        return [];
    } 

    onMouseUp(event: any): WorldCangesType[] {
        if (this.startPos != undefined) {
            let curPos = new CPoint(event.offsetX, event.offsetY);
            this.editModel.X = this.startFramePos!.X - this.editModel.ScrdXToCell(curPos.X - this.startPos!.X);
            this.editModel.Y = this.startFramePos!.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos!.Y);
            this.startPos = undefined;
            return [WorldCangesType.frameChanging];
        }
        return [];
    }

    onMouseMove(event: any): WorldCangesType[] {
        if (this.startPos != undefined) {
            let curPos = new CPoint(event.offsetX, event.offsetY);
            this.editModel.X = this.startFramePos!.X - this.editModel.ScrdXToCell(curPos.X - this.startPos!.X);
            this.editModel.Y = this.startFramePos!.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos!.Y);
            return [WorldCangesType.frameChanging];
        }
        return [];
    }
}

class EditCellRule {

    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {
    }        

    startPos: CPoint | undefined = undefined;

    onMouseDown(event: any): WorldCangesType[] {
        this.startPos = new CPoint(event.offsetX, event.offsetY);
        return [];
    }

    onMouseUp(event: any): WorldCangesType[] {
        let modified = false;
        if (this.startPos != undefined) {
            let endCell = this.editModel.CellXYInScr(event.offsetX, event.offsetY);
            if (Math.abs(this.startPos.X - event.offsetX) < 2 && Math.abs(this.startPos.Y - event.offsetY) < 2) {
                if (this.cWorld.GetCell(endCell.X, endCell.Y) === undefined)
                    this.cWorld.AddCell(endCell.X, endCell.Y);
                else
                    this.cWorld.ClearCell(endCell.X, endCell.Y);
                modified = true;
            }
            this.startPos = undefined;
        }
        return modified ? [WorldCangesType.cellsEditing]: [];
    }

}

class WheelRule {
    constructor(private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;

    onWheel(event: any): WorldCangesType[] {
        console.log(event);
        let mouseX0 = this.editModel.ScrXToCell(event.offsetX);
        let mouseY0 = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.scale = this.editModel.scale * Math.pow(1.1, -event.deltaY / 120);
        let mouseX = this.editModel.ScrXToCell(event.offsetX);
        let mouseY = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.X -= mouseX - mouseX0;
        this.editModel.Y -= mouseY - mouseY0;
        return [WorldCangesType.frameChanging];
    }
}

class TouchScrollRule {
    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {
    }

    startPos1: CPoint | undefined = undefined;
    startPos2: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;
    startScale: number = 1;

    onTouchStart(event: any): WorldCangesType[] {
        if (event.touches.length == 0)
            return [];
        var bcr = event.target.getBoundingClientRect();
        this.startPos1 = new CPoint(event.touches[0].clientX - bcr.x, event.touches[0].clientY - bcr.y);
        if (event.touches.length > 1) {
            this.startPos2 = new CPoint(event.touches[1].clientX - bcr.x, event.touches[1].clientY - bcr.y);
            this.startScale = this.editModel.scale;
        }
        this.startFramePos = this.editModel.GetFramePos();
        return [];
    }

    onTouchEnd(event: any): WorldCangesType[] {
        if (event.changedTouches.length == 0) {
            this.startPos1 = undefined;
            this.startPos2 = undefined;
            return [];
        }
        if (event.changedTouches.length == 1) {
            this.startPos2 = undefined;
        }
        if (this.startPos1 != undefined) {
            var bcr = event.target.getBoundingClientRect();
            let curPos = new CPoint(event.changedTouches[0].clientX - bcr.x, event.changedTouches[0].clientY - bcr.y);          
            let endCell = this.editModel.CellXYInScr(curPos.X, curPos.Y);
            if (event.changedTouches.length == 1 && Math.abs(this.startPos1.X - curPos.X) < 5 && Math.abs(this.startPos1.Y - curPos.Y) < 5) {
                if (this.cWorld.GetCell(endCell.X, endCell.Y) === undefined)
                    this.cWorld.AddCell(endCell.X, endCell.Y);
                else
                    this.cWorld.ClearCell(endCell.X, endCell.Y);
                return [WorldCangesType.cellsEditing];
            }
            else {
                this.editModel.X = this.startFramePos!.X - this.editModel.ScrdXToCell(curPos.X - this.startPos1!.X);
                this.editModel.Y = this.startFramePos!.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos1!.Y);
                this.startPos1 = undefined;
                return [WorldCangesType.frameChanging];
            }
        }
        return [];
    }

    onTouchMove(event: any): WorldCangesType[] {
        if (event.changedTouches.length == 0) {
            this.startPos1 = undefined;
            this.startPos2 = undefined;
            return [];
        }
        if (event.changedTouches.length == 1) {
            this.startPos2 = undefined;
        }
        var bcr = event.target.getBoundingClientRect();
        let curPos1 = new CPoint(event.touches[0].clientX - bcr.x, event.touches[0].clientY - bcr.y);
        let curPos2: CPoint | undefined = undefined;
        if (event.touches.length>1)
            curPos2 = new CPoint(event.touches[1].clientX - bcr.x, event.touches[1].clientY - bcr.y);

        if (this.startPos1 != undefined && this.startPos2 != undefined && curPos2 != undefined) {
            this.editModel.scale = this.startScale / this.startPos1.dist(this.startPos2) * curPos1.dist(curPos2);
        }
        if (this.startPos1 != undefined) {
            this.editModel.X = this.startFramePos!.X - this.editModel.ScrdXToCell(curPos1.X - this.startPos1!.X);
            this.editModel.Y = this.startFramePos!.Y - this.editModel.ScrdYToCell(curPos1.Y - this.startPos1!.Y);
            return [WorldCangesType.frameChanging];
        }
        return [];
    }
}
