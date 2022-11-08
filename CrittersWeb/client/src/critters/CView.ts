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
        this.PaintGrid(ctx!);

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

    PaintGrid(ctx: CanvasRenderingContext2D) {
        let x0 = this.editModel.ScrXToCell(0) - 1;
        let x1 = this.editModel.ScrXToCell(ctx!.canvas.width) + 1;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        for (let x = x0; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.CellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx!.canvas.height);
            ctx.stroke();
        }            
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        for (let x = x0-1; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.CellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx!.canvas.height);
            ctx.stroke();
        }            
        let y0 = this.editModel.ScrYToCell(0) - 1;
        let y1 = this.editModel.ScrYToCell(ctx!.canvas.height) + 1;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        for (let y = y0; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.CellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx!.canvas.width, ys);
            ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        for (let y = y0 - 1; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.CellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx!.canvas.width, ys);
            ctx.stroke();
        }
    }

}



// на входе получает провайдер canvas, мир, модель отображения, модель редактирования;
// по команде извне рисует на канвасе мир, согласно модели отображения и добавляет модель редактирования;
// остальную логику выполняют контроллеры
