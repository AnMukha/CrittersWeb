import { CEditModel } from "../CEditModel";
import { CPoint, WorldCangesType } from "../CrittersWorld";

export class ScrollRule {
    constructor(private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;

    onMouseDown(event: any): WorldCangesType[] {
        this.startPos = new CPoint(event.offsetX, event.offsetY);
        this.startFramePos = this.editModel.getFramePos();
        return [];
    }

    onMouseUp(event: any): WorldCangesType[] {
        if (this.startPos != undefined) {
            let curPos = new CPoint(event.offsetX, event.offsetY);
            this.editModel.x = this.startFramePos!.x - this.editModel.scrdXToCell(curPos.x - this.startPos!.x);
            this.editModel.y = this.startFramePos!.y - this.editModel.scrdYToCell(curPos.y - this.startPos!.y);
            this.startPos = undefined;
            return [WorldCangesType.FrameChanging];
        }
        return [];
    }

    onMouseMove(event: any): WorldCangesType[] {
        if (this.startPos != undefined) {
            let curPos = new CPoint(event.offsetX, event.offsetY);
            this.editModel.x = this.startFramePos!.x - this.editModel.scrdXToCell(curPos.x - this.startPos!.x);
            this.editModel.y = this.startFramePos!.y - this.editModel.scrdYToCell(curPos.y - this.startPos!.y);
            return [WorldCangesType.FrameChanging];
        }
        return [];
    }
}
