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
    }

    scrollRule: ScrollRule;
    editCellRule: EditCellRule;
    wheelRule: WheelRule;

    public override mouseDownHandler(event: any) {
        let changed = false;
        if (this.editCellRule.onMouseDown(event))
            changed = true;
        if (this.scrollRule.onMouseDown(event))
            changed = true;
        if (changed)
            this.cWorld.notifyAboutChanges(WorldCangesType.edited);
    }

    public override mouseUpHandler(event: any) {
        let changed = false;
        if (this.editCellRule.onMouseUp(event))
            changed = true;
        if (this.scrollRule.onMouseUp(event))
            changed = true;
        if (changed)
            this.cWorld.notifyAboutChanges(WorldCangesType.edited);
    }

    public override mouseMoveHandler(event: any) {
        let changed = false;
        if (this.scrollRule.onMouseMove(event))
            changed = true;
        if (changed)
            this.cWorld.notifyAboutChanges(WorldCangesType.edited);
    }

    public override mouseWheelHandler(event: any) {        
        if (this.wheelRule.onWheel(event))
            this.cWorld.notifyAboutChanges(WorldCangesType.edited);                    
    }
    
}

class ScrollRule {
    constructor(private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;

    onMouseDown(event: any) {
        this.startPos = new CPoint(event.offsetX, event.offsetY);
        this.startFramePos = this.editModel.GetFramePos();
        return false;
    } 

    onMouseUp(event: any) {
        if (this.startPos != undefined) {
            let curPos = new CPoint(event.offsetX, event.offsetY);
            this.editModel.X = this.startFramePos!.X - this.editModel.ScrdXToCell(curPos.X - this.startPos!.X);
            this.editModel.Y = this.startFramePos!.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos!.Y);
            this.startPos = undefined;
            return true;
        }
        return false;
    }

    onMouseMove(event: any) {
        if (this.startPos != undefined) {
            let curPos = new CPoint(event.offsetX, event.offsetY);
            this.editModel.X = this.startFramePos!.X - this.editModel.ScrdXToCell(curPos.X - this.startPos!.X);
            this.editModel.Y = this.startFramePos!.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos!.Y);            
            return true;
        }
        return false;
    }
}

class EditCellRule {

    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {
    }        

    startPos: CPoint | undefined = undefined;

    onMouseDown(event: any): boolean {
        this.startPos = new CPoint(event.offsetX, event.offsetY);
        return false;
    }

    onMouseUp(event: any) {
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
        return modified;
    }

}

class WheelRule {
    constructor(private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;

    onWheel(event: any) {
        console.log(event);
        let mouseX0 = this.editModel.ScrXToCell(event.offsetX);
        let mouseY0 = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.scale = this.editModel.scale * Math.pow(1.1, -event.deltaY / 120);
        let mouseX = this.editModel.ScrXToCell(event.offsetX);
        let mouseY = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.X -= mouseX - mouseX0;
        this.editModel.Y -= mouseY - mouseY0;
        return true;
    }
}
