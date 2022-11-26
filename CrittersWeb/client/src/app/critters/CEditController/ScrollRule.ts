import { CEditModel } from "../CEditModel";
import { CPoint, WorldCangesType } from "../CrittersWorld";

export class ScrollRule {
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
