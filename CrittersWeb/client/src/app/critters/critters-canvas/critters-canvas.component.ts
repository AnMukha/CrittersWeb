import { Component, OnInit } from '@angular/core';
import { CEditController } from '../CEditController';
import { CEditModel } from '../CEditModel';
import { CrittersView } from '../CrittersView';
import { CrittersWorld } from '../CrittersWorld';

@Component({
    selector: 'app-critters-canvas',
    templateUrl: "critters-canvas.component.html",
    styles: [
    ]
})
export class CrittersCanvasComponent implements OnInit {

    constructor(private editController: CEditController, private crittersView: CrittersView,
        private editModel: CEditModel, private crittersWorld: CrittersWorld) {
    }

    _canvas!: HTMLCanvasElement;

    ngOnInit(): void {
        this._canvas = document.getElementById("c_canvas") as HTMLCanvasElement;
        this.crittersWorld.subscribeToChanges((n) => this.crittersView.paint(this._canvas));
        this.editModel.subscribeToChanges((n) => this.crittersView.paint(this._canvas));
        this.crittersView.paint(this._canvas)
    }

    onResized(event: any) {
        this.crittersView.paint(this._canvas);
    }

    onMouseDown(event: any) {
        event.preventDefault();
        this.editController.mouseDownHandler(event);
    }

    onMouseUp(event: any) {
        event.preventDefault();
        this.editController.mouseUpHandler(event);
    }

    onMouseMove(event: any) {
        event.preventDefault();
        this.editController.mouseMoveHandler(event);
    }

    onMouseWheel(event: any) {
        event.preventDefault();
        this.editController.mouseWheelHandler(event);
    }

    onTouchStart(event: any) {
        event.preventDefault();
        this.editController.touchStartHandler(event);
    }

    onTouchEnd(event: any) {
        event.preventDefault();
        this.editController.touchEndHandler(event);
    }

    onTouchMove(event: any) {
        event.preventDefault();
        this.editController.touchMoveHandler(event);
    }




}
