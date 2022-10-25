import { __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CrittersWorld } from '../../critters/CrittersWorld';
import { CView } from '../../critters/CView';
let SandboxComponent = class SandboxComponent {
    constructor() {
        console.log("dddd");
        this.myDiv = new ElementRef(null);
        // ������� ���, ������� View, ������� � ������, 
        let world = new CrittersWorld();
        let view = new CView();
        // ������� ��� ��� View, 
    }
    ngOnInit() {
    }
};
__decorate([
    ViewChild('w_canvas')
], SandboxComponent.prototype, "myDiv", void 0);
SandboxComponent = __decorate([
    Component({
        selector: 'app-sandbox',
        templateUrl: 'sandbox.component.html',
        styles: []
    })
], SandboxComponent);
export { SandboxComponent };
//# sourceMappingURL=sandbox.component.js.map