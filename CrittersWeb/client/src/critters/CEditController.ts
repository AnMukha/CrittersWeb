import { CEditModel } from "./CEditModel";
import { CrittersWorld } from "./CrittersWorld";

export class CEditController {
    constructor(canvas: HTMLCanvasElement, cWorld: CrittersWorld, editModel: CEditModel, repaint: ()=>void) {
        this.canvas = canvas;
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.repaint = repaint;

        this.AddEventsToCanvas();
    }

    AddEventsToCanvas() {
        this.canvas.addEventListener("mousedown", (e) => this.MouseDownHandler(e));

    }

    MouseDownHandler(event: any) {
        console.log("on mouse down", event.offsetX, event.offsetY,
            Math.floor(this.editModel.ScrXToCell(event.offsetX)),
            Math.floor(this.editModel.ScrYToCell(event.offsetY)));
        let x = Math.floor(this.editModel.ScrXToCell(event.offsetX));
        let y = Math.floor(this.editModel.ScrYToCell(event.offsetY));
        if (this.cWorld.GetCell(x, y) === undefined)
            this.cWorld.AddCell(x, y);
        else
            this.cWorld.ClearCell(x, y);
        this.repaint();
    }

    canvas!: HTMLCanvasElement;
    cWorld!: CrittersWorld;
    editModel!: CEditModel;
    repaint!: () => void;

}
