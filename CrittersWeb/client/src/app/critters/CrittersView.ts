import { Injectable } from "@angular/core";
import { CEditModel } from "./CEditModel";
import { CrittersWorld } from "./CrittersWorld";

@Injectable()
export class CrittersView {
    public constructor(private world: CrittersWorld, private editModel: CEditModel) {        
    }

    private paintConfig: PaintConfig = new PaintConfig();

    paint(canvas: HTMLCanvasElement) {
        let ctx = canvas.getContext('2d');
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        ctx!.canvas.width = ctx!.canvas.clientWidth;
        ctx!.canvas.height = ctx!.canvas.clientHeight;
        if (this.paintConfig.paintGrid)
            this.paintGrid(ctx!);
        if (this.paintConfig.paintInfo)
            this.paintInfo(ctx!);

        ctx!.fillStyle = this.paintConfig.cellFillStyle; 
        for (let c of this.world.getCells()) {
            let x = this.editModel.cellXToScr(c.x);
            let y = this.editModel.cellYToScr(c.y);
            if (x < canvas.width && x > 0 - this.editModel.scale
                && y > 0 - this.editModel.scale && y < canvas.height) {
                ctx!.fillRect(x, y, this.editModel.scale, this.editModel.scale);
            }
        }
    }

    paintGrid(ctx: CanvasRenderingContext2D) {
        if (this.editModel.scale < 2)
            return;
        let x0 = Math.floor(this.editModel.scrXToCell(0)/2)*2 - 3;
        let x1 = Math.floor(this.editModel.scrXToCell(ctx!.canvas.width)/2)*2 + 3;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        for (let x = x0; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.cellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx!.canvas.height);
            ctx.stroke();
        }
        /*ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        for (let x = x0-1; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.CellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx!.canvas.height);
            ctx.stroke();
        }            */
        let y0 = Math.floor(this.editModel.ScrYToCell(0)/2)*2 - 3;
        let y1 = Math.floor(this.editModel.ScrYToCell(ctx!.canvas.height)/2)*2 + 3;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        for (let y = y0; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.cellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx!.canvas.width, ys);
            ctx.stroke();
        }
        /*ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        for (let y = y0 - 1; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.CellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx!.canvas.width, ys);
            ctx.stroke();
        }*/
    }

    paintInfo(ctx: CanvasRenderingContext2D) {
        let text: string = (this.world.getStepNum() - 1).toString();
        ctx.font = "15px Arial";
        ctx.fillStyle = "rgb(13,110,253)";
        ctx.fillText(text, ctx.canvas.width - 50, 30);
    }

    public getPaintConfig(): PaintConfig {
        return this.paintConfig;
    }

    public setPaintConfig(cfg: PaintConfig) {
        this.paintConfig = cfg;
    }


}

class PaintConfig {
    cellFillStyle: string = "green";    
    paintGrid: boolean = true;
    paintInfo: boolean = true;    
}



// на входе получает провайдер canvas, мир, модель отображения, модель редактирования;
// по команде извне рисует на канвасе мир, согласно модели отображения и добавляет модель редактирования;
// остальную логику выполняют контроллеры
