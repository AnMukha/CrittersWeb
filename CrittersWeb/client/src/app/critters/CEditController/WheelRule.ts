import { CEditModel } from "../CEditModel";
import { CPoint, WorldCangesType } from "../CrittersWorld";

export class WheelRule {
    constructor(private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    startFramePos: CPoint | undefined = undefined;

    onWheel(event: any): WorldCangesType[] {
        console.log(event);
        let mouseX0 = this.editModel.ScrXToCell(event.offsetX);
        let mouseY0 = this.editModel.ScrYToCell(event.offsetY);
        if (event.deltaY > 0 && this.editModel.scale > 0.7 || event.deltaY < 0 && this.editModel.scale < 100)
            this.editModel.scale = this.editModel.scale * Math.pow(1.1, -event.deltaY / 120);
        let mouseX = this.editModel.ScrXToCell(event.offsetX);
        let mouseY = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.X -= mouseX - mouseX0;
        this.editModel.Y -= mouseY - mouseY0;
        return [WorldCangesType.frameChanging];
    }
}
