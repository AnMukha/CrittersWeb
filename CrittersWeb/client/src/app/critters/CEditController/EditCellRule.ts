import { CEditModel } from "../CEditModel";
import { CPoint, CrittersWorld, WorldCangesType } from "../CrittersWorld";

export class EditCellRule {

    constructor(private cWorld: CrittersWorld, private editModel: CEditModel) {
    }

    startPos: CPoint | undefined = undefined;
    static readonly mouse_shift_to_edit = 4;

    onMouseDown(event: any): WorldCangesType[] {
        this.startPos = new CPoint(event.offsetX, event.offsetY);
        return [];
    }

    onMouseUp(event: any): WorldCangesType[] {
        let modified = false;
        if (this.startPos != undefined) {
            let endCell = this.editModel.cellXYInScr(event.offsetX, event.offsetY);
            if (Math.abs(this.startPos.x - event.offsetX) < EditCellRule.mouse_shift_to_edit && Math.abs(this.startPos.y - event.offsetY) < EditCellRule.mouse_shift_to_edit) {
                if (this.cWorld.getCell(endCell.x, endCell.y) === undefined)
                    this.cWorld.addCell(endCell.x, endCell.y);
                else
                    this.cWorld.clearCell(endCell.x, endCell.y);
                modified = true;
            }
            this.startPos = undefined;
        }
        return modified ? [WorldCangesType.CellsEditing] : [];
    }

}
