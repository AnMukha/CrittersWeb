import { CEditModel } from "./CEditModel";
import { CrittersWorld } from "./CrittersWorld";

export class CView {
    public constructor(canvas: HTMLCanvasElement, world: CrittersWorld, editModel: CEditModel) {
        this.canvas = canvas;
        this.world = world;
        this.editModel = editModel;
    }

    canvas!: HTMLCanvasElement;
    world!: CrittersWorld;
    editModel!: CEditModel;

    Repaint() {
        let ctx = this.canvas.getContext('2d');
        ctx!.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx!.canvas.width = ctx!.canvas.clientWidth;
        ctx!.canvas.height = ctx!.canvas.clientHeight;
        ctx!.fillStyle = "green";
        for (let c_e of this.world.cells.entries()) {
            let c = c_e[1];
            let x = this.editModel.CellXToScr(c.x);
            let y = this.editModel.CellYToScr(c.y);
            if (x < this.canvas.width && x > 0 - this.editModel.scale
                && y > 0 - this.editModel.scale && y < this.canvas.height) {
                ctx!.fillRect(x, y, this.editModel.scale, this.editModel.scale);
            }            
        }
    }


}

// на входе получает провайдер canvas, мир, модель отображения, модель редактирования;
// по команде извне рисует на канвасе мир, согласно модели отображения и добавляет модель редактирования;
// остальную логику выполняют контроллеры
