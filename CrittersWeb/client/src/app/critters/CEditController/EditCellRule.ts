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
            let endCell = this.editModel.CellXYInScr(event.offsetX, event.offsetY);
            if (Math.abs(this.startPos.X - event.offsetX) < EditCellRule.mouse_shift_to_edit && Math.abs(this.startPos.Y - event.offsetY) < EditCellRule.mouse_shift_to_edit) {
                if (this.cWorld.GetCell(endCell.X, endCell.Y) === undefined)
                    this.cWorld.AddCell(endCell.X, endCell.Y);
                else
                    this.cWorld.ClearCell(endCell.X, endCell.Y);
                modified = true;
            }
            this.startPos = undefined;
        }
        return modified ? [WorldCangesType.cellsEditing] : [];
    }

}
