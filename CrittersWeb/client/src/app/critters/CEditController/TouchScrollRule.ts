import { CEditModel } from "../CEditModel";
import { CPoint, CrittersWorld, WorldCangesType } from "../CrittersWorld";

export class TouchScrollRule {
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
        this.startFramePos = this.editModel.getFramePos();
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
            let endCell = this.editModel.cellXYInScr(curPos.x, curPos.y);
            if (event.changedTouches.length == 1 && Math.abs(this.startPos1.x - curPos.x) < 5 && Math.abs(this.startPos1.y - curPos.y) < 5) {
                if (this.cWorld.getCell(endCell.x, endCell.y) === undefined)
                    this.cWorld.addCell(endCell.x, endCell.y);
                else
                    this.cWorld.clearCell(endCell.x, endCell.y);
                return [WorldCangesType.CellsEditing];
            }
            else {
                this.editModel.x = this.startFramePos!.x - this.editModel.scrdXToCell(curPos.x - this.startPos1!.x);
                this.editModel.y = this.startFramePos!.y - this.editModel.scrdYToCell(curPos.y - this.startPos1!.y);
                this.startPos1 = undefined;
                return [WorldCangesType.FrameChanging];
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
        if (event.touches.length > 1)
            curPos2 = new CPoint(event.touches[1].clientX - bcr.x, event.touches[1].clientY - bcr.y);

        if (this.startPos1 != undefined && this.startPos2 != undefined && curPos2 != undefined) {
            this.editModel.scale = this.startScale / this.startPos1.dist(this.startPos2) * curPos1.dist(curPos2);
        }
        if (this.startPos1 != undefined) {
            this.editModel.x = this.startFramePos!.x - this.editModel.scrdXToCell(curPos1.x - this.startPos1!.x);
            this.editModel.y = this.startFramePos!.y - this.editModel.scrdYToCell(curPos1.y - this.startPos1!.y);
            return [WorldCangesType.FrameChanging];
        }
        return [];
    }
}
