"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/login.component */ 3392);
/* harmony import */ var _views_sandbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/sandbox.component */ 5957);
/* harmony import */ var _views_startpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/startpage.component */ 542);
/* harmony import */ var _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/wiki/article.component */ 7744);
/* harmony import */ var _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/wiki/articles.component */ 1786);
/* harmony import */ var _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/wiki/edit.component */ 767);
/* harmony import */ var _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/wiki/wiki.component */ 8929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: _views_startpage_component__WEBPACK_IMPORTED_MODULE_2__.StartpageComponent },
    { path: "sandbox", component: _views_sandbox_component__WEBPACK_IMPORTED_MODULE_1__.SandboxComponent },
    {
        path: "wiki", component: _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_6__.WikiComponent,
        children: [
            {
                path: 'article/:id',
                component: _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_3__.ArticleComponent,
            },
            {
                path: 'edit/:id',
                component: _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_5__.EditArticleComponent,
            },
            {
                path: 'articles/:request',
                component: _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_4__.ArticlesComponent
            },
        ],
    },
    { path: "login", component: _views_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _views_sandbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/sandbox.component */ 5957);
/* harmony import */ var _views_startpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/startpage.component */ 542);
/* harmony import */ var _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/wiki/wiki.component */ 8929);
/* harmony import */ var _views_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login.component */ 3392);
/* harmony import */ var _views_component_container_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/component-container.directive */ 702);
/* harmony import */ var _views_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/registration.component */ 1662);
/* harmony import */ var _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/wiki/article.component */ 7744);
/* harmony import */ var _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/wiki/articles.component */ 1786);
/* harmony import */ var _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/wiki/edit.component */ 767);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./critters/critters-canvas/critters-canvas.component */ 986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./critters/time-control-panel/time-control-panel.component */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _views_sandbox_component__WEBPACK_IMPORTED_MODULE_2__.SandboxComponent,
        _views_startpage_component__WEBPACK_IMPORTED_MODULE_3__.StartpageComponent,
        _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_4__.WikiComponent,
        _views_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _views_component_container_directive__WEBPACK_IMPORTED_MODULE_6__.ComponentContainerDirective,
        _views_registration_component__WEBPACK_IMPORTED_MODULE_7__.RegistrationComponent,
        _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_8__.ArticleComponent,
        _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_9__.ArticlesComponent,
        _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_10__.EditArticleComponent,
        _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_11__.CrittersCanvasComponent,
        _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_12__.TimeControlPanelComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule] }); })();


/***/ }),

/***/ 838:
/*!*********************************************!*\
  !*** ./src/app/critters/CEditController.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditController": () => (/* binding */ CEditController)
/* harmony export */ });
/* harmony import */ var _CEditControllerBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CEditControllerBase */ 323);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrittersWorld */ 237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CEditModel */ 866);





class CEditController extends _CEditControllerBase__WEBPACK_IMPORTED_MODULE_0__.CEditControllerBase {
    constructor(cWorld, editModel) {
        super();
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.scrollRule = new ScrollRule(editModel);
        this.editCellRule = new EditCellRule(cWorld, editModel);
        this.wheelRule = new WheelRule(editModel);
    }
    mouseDownHandler(event) {
        let changed = false;
        if (this.editCellRule.onMouseDown(event))
            changed = true;
        if (this.scrollRule.onMouseDown(event))
            changed = true;
        if (changed)
            this.cWorld.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.edited);
    }
    mouseUpHandler(event) {
        let changed = false;
        if (this.editCellRule.onMouseUp(event))
            changed = true;
        if (this.scrollRule.onMouseUp(event))
            changed = true;
        if (changed)
            this.cWorld.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.edited);
    }
    mouseMoveHandler(event) {
        let changed = false;
        if (this.scrollRule.onMouseMove(event))
            changed = true;
        if (changed)
            this.cWorld.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.edited);
    }
    mouseWheelHandler(event) {
        if (this.wheelRule.onWheel(event))
            this.cWorld.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.edited);
    }
}
CEditController.ɵfac = function CEditController_Factory(t) { return new (t || CEditController)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel)); };
CEditController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CEditController, factory: CEditController.ɵfac });
class ScrollRule {
    constructor(editModel) {
        this.editModel = editModel;
        this.startPos = undefined;
        this.startFramePos = undefined;
    }
    onMouseDown(event) {
        this.startPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CPoint(event.offsetX, event.offsetY);
        this.startFramePos = this.editModel.GetFramePos();
        return false;
    }
    onMouseUp(event) {
        if (this.startPos != undefined) {
            let curPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CPoint(event.offsetX, event.offsetY);
            this.editModel.X = this.startFramePos.X - this.editModel.ScrdXToCell(curPos.X - this.startPos.X);
            this.editModel.Y = this.startFramePos.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos.Y);
            this.startPos = undefined;
            return true;
        }
        return false;
    }
    onMouseMove(event) {
        if (this.startPos != undefined) {
            let curPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CPoint(event.offsetX, event.offsetY);
            this.editModel.X = this.startFramePos.X - this.editModel.ScrdXToCell(curPos.X - this.startPos.X);
            this.editModel.Y = this.startFramePos.Y - this.editModel.ScrdYToCell(curPos.Y - this.startPos.Y);
            return true;
        }
        return false;
    }
}
class EditCellRule {
    constructor(cWorld, editModel) {
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.startPos = undefined;
    }
    onMouseDown(event) {
        this.startPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CPoint(event.offsetX, event.offsetY);
        return false;
    }
    onMouseUp(event) {
        let modified = false;
        if (this.startPos != undefined) {
            let endCell = this.editModel.CellXYInScr(event.offsetX, event.offsetY);
            if (Math.abs(this.startPos.X - event.offsetX) < 2 && Math.abs(this.startPos.Y - event.offsetY) < 2) {
                if (this.cWorld.GetCell(endCell.X, endCell.Y) === undefined)
                    this.cWorld.AddCell(endCell.X, endCell.Y);
                else
                    this.cWorld.ClearCell(endCell.X, endCell.Y);
                modified = true;
            }
            this.startPos = undefined;
        }
        return modified;
    }
}
class WheelRule {
    constructor(editModel) {
        this.editModel = editModel;
        this.startPos = undefined;
        this.startFramePos = undefined;
    }
    onWheel(event) {
        console.log(event);
        let mouseX0 = this.editModel.ScrXToCell(event.offsetX);
        let mouseY0 = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.scale = this.editModel.scale * Math.pow(1.1, -event.deltaY / 120);
        let mouseX = this.editModel.ScrXToCell(event.offsetX);
        let mouseY = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.X -= mouseX - mouseX0;
        this.editModel.Y -= mouseY - mouseY0;
        return true;
    }
}


/***/ }),

/***/ 323:
/*!*************************************************!*\
  !*** ./src/app/critters/CEditControllerBase.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditControllerBase": () => (/* binding */ CEditControllerBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CEditControllerBase {
    constructor() {
    }
    mouseDownHandler(event) {
    }
    mouseUpHandler(event) {
    }
    mouseMoveHandler(event) {
    }
    mouseWheelHandler(event) {
    }
}
CEditControllerBase.ɵfac = function CEditControllerBase_Factory(t) { return new (t || CEditControllerBase)(); };
CEditControllerBase.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CEditControllerBase, factory: CEditControllerBase.ɵfac });


/***/ }),

/***/ 866:
/*!****************************************!*\
  !*** ./src/app/critters/CEditModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditModel": () => (/* binding */ CEditModel)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class CEditModel {
    constructor() {
        this.scale = 10;
        this.X = 0;
        this.Y = 0;
        this.gridActual = false;
        this.changesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    subscribeToChanges(next) {
        this.changesSubject.subscribe(next);
    }
    CellXToScr(x) {
        return (x - this.X) * this.scale;
    }
    CellYToScr(y) {
        return (y - this.Y) * this.scale;
    }
    CelldXToScr(dx) {
        return dx * this.scale;
    }
    CelldYToScr(dy) {
        return dy * this.scale;
    }
    ScrXToCell(x) {
        return this.X + x / this.scale;
    }
    ScrYToCell(y) {
        return this.Y + y / this.scale;
    }
    ScrdXToCell(x) {
        return x / this.scale;
    }
    ScrdYToCell(y) {
        return y / this.scale;
    }
    CellXYInScr(x, y) {
        return new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(Math.floor(this.ScrXToCell(x)), Math.floor(this.ScrYToCell(y)));
    }
    GetFramePos() {
        return new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(this.X, this.Y);
    }
}
CEditModel.ɵfac = function CEditModel_Factory(t) { return new (t || CEditModel)(); };
CEditModel.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CEditModel, factory: CEditModel.ɵfac });


/***/ }),

/***/ 576:
/*!*********************************************!*\
  !*** ./src/app/critters/CTimeController.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTimeController": () => (/* binding */ CTimeController)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class CTimeController {
    constructor(world) {
        this.world = world;
        this.speed = 0;
        this.timeForward = true;
        this.execTimer = undefined;
    }
    step() {
        this.world.RunSerie(1);
        this.world.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.executed);
        this.toOddStep();
    }
    setSpeed(speed) {
        this.speed = speed;
        if (this.execTimer)
            clearTimeout(this.execTimer);
        this.stepOnTimer();
        if (this.speed == 0)
            this.toOddStep();
    }
    stepOnTimer() {
        if (this.speed != 0) {
            this.world.RunSerie(1);
            console.log(this.world.stepNum);
            this.world.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.executed);
            if (this.world.stepNum != 1)
                this.execTimer = setTimeout(() => this.stepOnTimer(), 1 / this.speed * 1000);
            else {
                this.speed = 0;
                if (this.onZeroStateCallback)
                    this.onZeroStateCallback();
            }
        }
        else {
            if (this.execTimer)
                clearTimeout(this.execTimer);
            this.execTimer = undefined;
        }
    }
    toOddStep() {
        if (this.world.IsEvenStep())
            setTimeout(() => {
                if (this.world.IsEvenStep()) {
                    this.world.RunSerie(1);
                    this.world.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.executed);
                }
            }, 500);
    }
    setTimeDirection(forward) {
        if (this.timeForward != forward)
            this.timeForward = forward;
        if (this.world.forward != forward) {
            this.world.ReverseTimeDirection();
            this.toOddStep();
        }
    }
    onZeroState(cb) {
        this.onZeroStateCallback = cb;
    }
}
CTimeController.ɵfac = function CTimeController_Factory(t) { return new (t || CTimeController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld)); };
CTimeController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CTimeController, factory: CTimeController.ɵfac });


/***/ }),

/***/ 197:
/*!******************************************!*\
  !*** ./src/app/critters/CrittersView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrittersView": () => (/* binding */ CrittersView)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 237);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CEditModel */ 866);



class CrittersView {
    constructor(world, editModel) {
        this.world = world;
        this.editModel = editModel;
    }
    paint(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
        this.PaintGrid(ctx);
        ctx.fillStyle = "green";
        for (let c_e of this.world.cells.entries()) {
            let c = c_e[1];
            let x = this.editModel.CellXToScr(c.x);
            let y = this.editModel.CellYToScr(c.y);
            if (x < canvas.width && x > 0 - this.editModel.scale
                && y > 0 - this.editModel.scale && y < canvas.height) {
                ctx.fillRect(x, y, this.editModel.scale, this.editModel.scale);
            }
        }
    }
    PaintGrid(ctx) {
        let x0 = Math.floor(this.editModel.ScrXToCell(0) / 2) * 2 - 3;
        let x1 = Math.floor(this.editModel.ScrXToCell(ctx.canvas.width) / 2) * 2 + 3;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        for (let x = x0; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.CellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx.canvas.height);
            ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        for (let x = x0 - 1; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.CellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx.canvas.height);
            ctx.stroke();
        }
        let y0 = Math.floor(this.editModel.ScrYToCell(0) / 2) * 2 - 3;
        let y1 = Math.floor(this.editModel.ScrYToCell(ctx.canvas.height) / 2) * 2 + 3;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        for (let y = y0; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.CellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx.canvas.width, ys);
            ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.2)';
        for (let y = y0 - 1; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.CellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx.canvas.width, ys);
            ctx.stroke();
        }
    }
}
CrittersView.ɵfac = function CrittersView_Factory(t) { return new (t || CrittersView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_CEditModel__WEBPACK_IMPORTED_MODULE_1__.CEditModel)); };
CrittersView.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CrittersView, factory: CrittersView.ɵfac });


/***/ }),

/***/ 237:
/*!*******************************************!*\
  !*** ./src/app/critters/CrittersWorld.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CPoint": () => (/* binding */ CPoint),
/* harmony export */   "CRect": () => (/* binding */ CRect),
/* harmony export */   "Cell": () => (/* binding */ Cell),
/* harmony export */   "CrittersWorld": () => (/* binding */ CrittersWorld),
/* harmony export */   "CrittersWorldSerializer": () => (/* binding */ CrittersWorldSerializer),
/* harmony export */   "WorldCangesType": () => (/* binding */ WorldCangesType)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CrittersWorld {
    constructor() {
        this.cells = new Map();
        this.stepNum = 1;
        this.forward = true;
        this.nextCellKey = 0;
        this.changesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    AddCell(x, y) {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let resultCell = new Cell(this.NextCellKey(), x, y, this.stepNum);
        this.cells.set(key, resultCell);
        return resultCell;
    }
    NextCellKey() {
        this.nextCellKey++;
        return this.nextCellKey;
    }
    notifyAboutChanges(changesType) {
        this.changesSubject.next(changesType);
    }
    subscribeToChanges(next) {
        this.changesSubject.subscribe(next);
    }
    // Очистить клетку, если занята        
    ClearCell(x, y) {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let c = this.cells.get(key);
        if (c)
            this.RemoveCell(key, c);
    }
    RemoveCell(key, cl) {
        this.cells.delete(key);
    }
    IsEvenStep() {
        return this.stepNum % 2 == 0;
    }
    RunSerie(stepCnt) {
        for (let i = 0; i < stepCnt; i++)
            this.Run();
    }
    Clear() {
        this.cells.clear();
        this.nextCellKey = 0;
        this.stepNum = 1;
    }
    ReverseTimeDirection() {
        if (this.forward)
            this.stepNum--;
        else
            this.stepNum++;
        this.forward = !this.forward;
    }
    Run() {
        if (this.forward)
            this.stepNum++;
        else
            this.stepNum--;
        let evenStep = this.stepNum % 2 == 0;
        for (let c_e of this.cells.entries()) {
            let c = c_e[1];
            if (c.prosessedStep != this.stepNum) {
                let xc = c.x;
                let yc = c.y;
                // позиция ячейки
                let xgc = xc - (((xc % 2 == 0) == evenStep) ? 0 : 1);
                let ygc = yc - (((yc % 2 == 0) == evenStep) ? 0 : 1);
                // другие клетки в ячейке
                let gc00;
                let gc11;
                let gc01;
                let gc10;
                let c00 = false, c11 = false, c01 = false, c10 = false;
                gc00 = this.cells.get(xgc * Cell.KEY_GEN_FACTOR + ygc);
                c00 = gc00 != undefined;
                gc11 = this.cells.get((xgc + 1) * Cell.KEY_GEN_FACTOR + (ygc + 1));
                c11 = gc11 != undefined;
                gc01 = this.cells.get(xgc * Cell.KEY_GEN_FACTOR + (ygc + 1));
                c01 = gc01 != undefined;
                gc10 = this.cells.get((xgc + 1) * Cell.KEY_GEN_FACTOR + ygc);
                c10 = gc10 != undefined;
                // определить действие в зависимости от положения 
                let cellCnt = (gc00 == null ? 0 : 1) + (gc11 == null ? 0 : 1) + (gc01 == null ? 0 : 1) + (gc10 == null ? 0 : 1);
                if (cellCnt == 1) {
                    // это единственная ячейка - двигать на нечетных шагах по диагонали
                    if (!evenStep) {
                        if (xgc == xc)
                            c.x++;
                        else
                            c.x--;
                        if (ygc == yc)
                            c.y++;
                        else
                            c.y--;
                    }
                }
                else if (cellCnt == 2) {
                    // две ячейки: 6 вариантов инверсии
                    if (c00 && c00 == c11) {
                        // 10
                        // 01
                        gc00.x++;
                        gc11.x--;
                    }
                    else if (c01 && c01 == c10) {
                        // 01
                        // 10
                        gc01.x++;
                        gc10.x--;
                        //gc01.y--;
                        //gc10.y++;
                    }
                    else if (c00 && c00 == c10) {
                        // 11
                        // 00
                        gc00.y++;
                        gc10.y++;
                    }
                    else if (c01 && c01 == c11) {
                        // 00
                        // 11
                        gc01.y--;
                        gc11.y--;
                    }
                    else if (c00 && c00 == c01) {
                        // 10
                        // 10
                        gc00.x++;
                        gc01.x++;
                    }
                    else {
                        // 01
                        // 01
                        gc10.x--;
                        gc11.x--;
                    }
                }
                else if (cellCnt == 3) {
                    if (evenStep) {
                        if (!c00) {
                            gc11.x--;
                            gc11.y--;
                        }
                        else if (!c11) {
                            gc00.x++;
                            gc00.y++;
                        }
                        else if (!c01) {
                            gc10.x--;
                            gc10.y++;
                        }
                        else {
                            gc01.x++;
                            gc01.y--;
                        }
                    }
                }
                if (c00)
                    gc00.prosessedStep = this.stepNum;
                if (c11)
                    gc11.prosessedStep = this.stepNum;
                if (c01)
                    gc01.prosessedStep = this.stepNum;
                if (c10)
                    gc10.prosessedStep = this.stepNum;
            }
        }
        let cellsNew = new Map();
        for (let c_e of this.cells.entries()) {
            let c = c_e[1];
            cellsNew.set(c.x * Cell.KEY_GEN_FACTOR + c.y, c);
        }
        this.cells = cellsNew;
    }
    GetCellsCount() {
        return this.cells.size;
    }
    GetCell(x, y) {
        return this.cells.get(x * Cell.KEY_GEN_FACTOR + y);
    }
    FindInArea(rectangle) {
        let result = [];
        for (let c of this.cells.entries()) {
            let cell = c[1];
            if (rectangle.ContainsInXY(cell.x, cell.y))
                result.push(cell);
        }
        return result;
    }
    DeleteCells(deleted) {
        for (let c of deleted)
            this.cells.delete(c.GetKey());
    }
    MoveCellsTo(cls, dx, dy) {
        /*foreach(var c in cls)
        cells.Remove(c.GetKey());
        foreach(var c in cls)
        {
            c.x += dx;
            c.y += dy;
        }
        foreach(var c in cls)
        cells.Add(c.GetKey(), c);*/
    }
    SetThisTimeAsZero() {
        if (this.stepNum == 1)
            return;
        this.stepNum = 1;
        this.forward = true;
        for (let c of this.cells.values())
            c.prosessedStep = 1;
    }
    IsZeroTime() {
        return this.stepNum == 1;
    }
    RunToZeroTime() {
        if (!this.forward) {
            this.ReverseTimeDirection();
            if (this.IsEvenStep())
                this.RunSerie(1);
        }
        if (this.stepNum == 1)
            return;
        let distToZero = Math.abs(this.stepNum - 1);
        if (this.stepNum > 1)
            this.ReverseTimeDirection();
        this.RunSerie(distToZero);
        this.SetThisTimeAsZero();
    }
    MakeSnapshot() {
        let resultCells = [];
        for (let value of this.cells.values()) {
            resultCells.push(value.Clone());
        }
        return { cells: resultCells };
    }
    LoadSnapshot(snapshot) {
        this.Clear();
        this.stepNum = 1;
        this.forward = true;
        for (let c of snapshot.cells) {
            c.prosessedStep = this.stepNum;
            this.cells.set(c.x * Cell.KEY_GEN_FACTOR + c.y, c.Clone());
        }
    }
    TestInit() {
        this.AddCell(10, 10);
        this.AddCell(11, 11);
        this.AddCell(10, 11);
        this.AddCell(12, 11);
    }
}
CrittersWorld.ɵfac = function CrittersWorld_Factory(t) { return new (t || CrittersWorld)(); };
CrittersWorld.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CrittersWorld, factory: CrittersWorld.ɵfac });
class CrittersWorldSerializer {
    SerializeCells(w) {
        let result = [];
        for (let cellD of w.cells.entries()) {
            let c = cellD[1];
            result.push(c.x);
            result.push(c.y);
        }
        return result;
    }
    DeserializeCells(cellsData, cw) {
        for (let n = 0; n < cellsData.length; n = n + 2) {
            cw.AddCell(cellsData[n], cellsData[n + 1]);
        }
    }
}
class Cell {
    constructor(id, x, y, procStep) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.prosessedStep = procStep;
    }
    GetKey() {
        return this.x * Cell.KEY_GEN_FACTOR + this.y;
    }
    MoveTo(toX, toY) {
        this.x = toX;
        this.y = toY;
    }
    Clone() {
        return new Cell(this.id, this.x, this.y, this.prosessedStep);
    }
}
Cell.KEY_GEN_FACTOR = 1000000000;
class CRect {
    constructor(x, y, width, height) {
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
    }
    GetTop() { return this.Y; }
    GetRight() { return this.X + this.Width; }
    GetLeft() { return this.X; }
    GetBottom() { return this.Y + this.Height; }
    ContainsInXY(x, y) {
        return x >= this.X && x < this.X + this.Width && y >= this.Y && y < this.Y + this.Height;
    }
    Contains(p) {
        return p.X >= this.X && p.X < this.X + this.Width && p.Y >= this.Y && p.Y < this.Y + this.Height;
    }
}
class CPoint {
    constructor(x, y) {
        this.X = x;
        this.Y = y;
    }
}
var WorldCangesType;
(function (WorldCangesType) {
    WorldCangesType[WorldCangesType["edited"] = 0] = "edited";
    WorldCangesType[WorldCangesType["loaded"] = 1] = "loaded";
    WorldCangesType[WorldCangesType["executed"] = 2] = "executed";
})(WorldCangesType || (WorldCangesType = {}));


/***/ }),

/***/ 329:
/*!************************************************!*\
  !*** ./src/app/critters/ZeroTimeController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeroTimeController": () => (/* binding */ ZeroTimeController)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ZeroTimeController {
    constructor(world) {
        this.world = world;
        this.wasEditedAtNotZeroTime = false;
        world.subscribeToChanges(ch => {
            if (ch == _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.edited && !world.IsZeroTime())
                this.wasEditedAtNotZeroTime = true;
            if (ch == _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.loaded)
                this.wasEditedAtNotZeroTime = false;
        });
    }
    setThisTimeAsZero() {
        if (this.world.IsEvenStep())
            return;
        this.snapshot = this.world.MakeSnapshot();
        this.world.SetThisTimeAsZero();
        this.world.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.loaded);
    }
    goToZeroTime() {
        // console.log("dddddddddddddddd");
        if (this.wasEditedAtNotZeroTime)
            this.world.RunToZeroTime();
        else if (this.snapshot)
            this.world.LoadSnapshot(this.snapshot);
        this.world.notifyAboutChanges(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.loaded);
        this.wasEditedAtNotZeroTime = false;
    }
}
ZeroTimeController.ɵfac = function ZeroTimeController_Factory(t) { return new (t || ZeroTimeController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld)); };
ZeroTimeController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ZeroTimeController, factory: ZeroTimeController.ɵfac });


/***/ }),

/***/ 986:
/*!***********************************************************************!*\
  !*** ./src/app/critters/critters-canvas/critters-canvas.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrittersCanvasComponent": () => (/* binding */ CrittersCanvasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CEditController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CEditController */ 838);
/* harmony import */ var _CrittersView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CrittersView */ 197);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CEditModel */ 866);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CrittersWorld */ 237);





class CrittersCanvasComponent {
    constructor(editController, crittersView, editModel, crittersWorld) {
        this.editController = editController;
        this.crittersView = crittersView;
        this.editModel = editModel;
        this.crittersWorld = crittersWorld;
    }
    ngOnInit() {
        this._canvas = document.getElementById("c_canvas");
        this.crittersWorld.subscribeToChanges((n) => this.crittersView.paint(this._canvas));
        this.editModel.subscribeToChanges((n) => this.crittersView.paint(this._canvas));
        this.crittersView.paint(this._canvas);
    }
    onMouseDown(event) {
        this.editController.mouseDownHandler(event);
    }
    onMouseUp(event) {
        this.editController.mouseUpHandler(event);
    }
    onMouseMove(event) {
        this.editController.mouseMoveHandler(event);
    }
    onMouseWheel(event) {
        this.editController.mouseWheelHandler(event);
    }
}
CrittersCanvasComponent.ɵfac = function CrittersCanvasComponent_Factory(t) { return new (t || CrittersCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CEditController__WEBPACK_IMPORTED_MODULE_0__.CEditController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CrittersView__WEBPACK_IMPORTED_MODULE_1__.CrittersView), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld)); };
CrittersCanvasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CrittersCanvasComponent, selectors: [["app-critters-canvas"]], decls: 1, vars: 0, consts: [["id", "c_canvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", "background-color", "white", 3, "mousedown", "mouseup", "mousemove", "wheel"]], template: function CrittersCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mousedown", function CrittersCanvasComponent_Template_canvas_mousedown_0_listener($event) { return ctx.onMouseDown($event); })("mouseup", function CrittersCanvasComponent_Template_canvas_mouseup_0_listener($event) { return ctx.onMouseUp($event); })("mousemove", function CrittersCanvasComponent_Template_canvas_mousemove_0_listener($event) { return ctx.onMouseMove($event); })("wheel", function CrittersCanvasComponent_Template_canvas_wheel_0_listener($event) { return ctx.onMouseWheel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 54:
/*!*****************************************************************************!*\
  !*** ./src/app/critters/time-control-panel/time-control-panel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeControlPanelComponent": () => (/* binding */ TimeControlPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CTimeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CTimeController */ 576);
/* harmony import */ var _ZeroTimeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ZeroTimeController */ 329);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CrittersWorld */ 237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





class TimeControlPanelComponent {
    constructor(timeController, zeroTimeController, world) {
        this.timeController = timeController;
        this.zeroTimeController = zeroTimeController;
        this.world = world;
        this.MAX_SPEED = 100;
        this.speed = 0;
        this.timeDirectionForward = true;
    }
    ngOnInit() {
        this.timeController.onZeroState(() => {
            this.speed = 0;
            this.timeController.setSpeed(0);
        });
    }
    onStepOrStop() {
        if (this.speed == 0) {
            if (this.world.IsZeroTime() && this.world.forward)
                this.zeroTimeController.setThisTimeAsZero();
            this.timeController.step();
        }
        else {
            this.speed = 0;
            this.timeController.setSpeed(0);
        }
    }
    onRunOrFaster() {
        if (this.speed == 0)
            this.speed = 1;
        else {
            if (this.speed * 2 <= this.MAX_SPEED)
                this.speed = this.speed * 2;
        }
        this.timeController.setSpeed(this.speed);
    }
    onReverseTime() {
        console.log("onReverseTime");
        this.timeDirectionForward = !this.timeDirectionForward;
        this.timeController.setTimeDirection(this.timeDirectionForward);
    }
    onToStart() {
        this.speed = 0;
        this.timeController.setSpeed(0);
        this.timeDirectionForward = true;
        this.timeController.timeForward = true;
        this.zeroTimeController.goToZeroTime();
    }
}
TimeControlPanelComponent.ɵfac = function TimeControlPanelComponent_Factory(t) { return new (t || TimeControlPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_CTimeController__WEBPACK_IMPORTED_MODULE_0__.CTimeController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ZeroTimeController__WEBPACK_IMPORTED_MODULE_1__.ZeroTimeController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_2__.CrittersWorld)); };
TimeControlPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TimeControlPanelComponent, selectors: [["app-time-control-panel"]], decls: 10, vars: 3, consts: [[1, "p-3"], [1, "btn", "btn-outline-primary", "m-1", 3, "click"], [3, "ngClass"], [1, "fas", "fa-forward"], [1, "fas", "fa-backward-fast"]], template: function TimeControlPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_1_listener() { return ctx.onStepOrStop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_3_listener() { return ctx.onRunOrFaster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_6_listener() { return ctx.onReverseTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_8_listener() { return ctx.onToStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.speed == 0 ? "fas fa-forward-step" : "fas fa-stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.speed + " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.timeDirectionForward ? "fas fa-rotate-back" : "fas fa-rotate-forward");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["div[_ngcontent-%COMP%] \r\n{\r\n    background-color: rgba(222, 222, 222, 0.7);    \r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtY29udHJvbC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJ0aW1lLWNvbnRyb2wtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjcpOyAgICBcclxufVxyXG5idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService),
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class LoginService {
  constructor(http) {
    this.http = http;
  }

  Logout() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(_this.http.get("/account/logout"));
    })();
  }

  getCurrentUserInfo() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.lastValueFrom)(_this2.http.get("/account/userinfo"));
    })();
  }

}

LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});
class UserInfo {}

/***/ }),

/***/ 702:
/*!********************************************************!*\
  !*** ./src/app/views/component-container.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentContainerDirective": () => (/* binding */ ComponentContainerDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ComponentContainerDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ComponentContainerDirective.ɵfac = function ComponentContainerDirective_Factory(t) { return new (t || ComponentContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ComponentContainerDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ComponentContainerDirective, selectors: [["", "component-container", ""]] });


/***/ }),

/***/ 3392:
/*!******************************************!*\
  !*** ./src/app/views/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);








const _c0 = function () {
  return {
    "display": "block"
  };
};

const _c1 = function () {
  return [];
};

class LoginComponent {
  constructor(http) {
    this.http = http;
    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.loginFailed = false;
  }

  ngOnInit() {}

  onOkButton(emailOrName, password) {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let isEmail = emailOrName.indexOf('@') != -1;
      let res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(_this.http.post("/account/Login", {
        UserName: isEmail ? null : emailOrName,
        Mail: isEmail ? emailOrName : null,
        Password: password
      }));
      console.log(res);
      if (res) _this.result.emit("ok");else {
        _this.loginFailed = true;
        console.log("Login was not successful");
      }
    })();
  }

  onCancelButton() {
    this.result.emit("cancel");
  }

  onRegisterButton() {
    this.result.emit("register");
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  outputs: {
    result: "result"
  },
  decls: 28,
  vars: 5,
  consts: [["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "text-danger", 3, "hidden"], [1, "mb-3"], ["titleinput", ""], ["for", "emailInLogin", 1, "form-label"], ["type", "text", "placeholder", "example@mail.com", "aria-label", "Email", "aria-describedby", "basic-addon2", 1, "form-control"], ["nameInput", ""], ["for", "passwordInLogin", 1, "form-label"], ["type", "password", "autocomplete", "off", "id", "passwordInLogin", "aria-label", "Password", "aria-describedby", "basic-addon2", 1, "form-control"], ["passInput", ""], [1, "link-primary", "float-end", 3, "routerLink", "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Incorrect password or login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7, 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User name or email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7, 8)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_21_listener() {
        return ctx.onRegisterButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onOkButton(_r1.value, _r3.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
        return ctx.onCancelButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.loginFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
  encapsulation: 2
});

/***/ }),

/***/ 1662:
/*!*************************************************!*\
  !*** ./src/app/views/registration.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







const _c0 = function () {
  return {
    "display": "block"
  };
};

class RegistrationComponent {
  constructor(http) {
    this.http = http;
    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.registrationFailed = false;
    this.registrationError = "";
  }

  ngOnInit() {}

  onOkButton() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(_this.http.post("/account/Register", {
        Mail: _this.eMail,
        Password: _this.password,
        UserName: _this.userName
      }));
      console.log(res);

      if (res.success) {
        console.log("Registration success");

        _this.result.emit("ok");
      } else {
        _this.registrationFailed = true;
        _this.registrationError = res.errorDescription;
        console.log("Registration failed:" + _this.registrationError);
      }
    })();
  }

  onCancelButton() {
    this.result.emit("cancel");
  }

}

RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
  return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RegistrationComponent,
  selectors: [["app-register"]],
  outputs: {
    result: "result"
  },
  decls: 38,
  vars: 8,
  consts: [["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "text-danger", 3, "hidden"], [1, "mb-3"], ["titleinput", ""], ["for", "userInRegister", 1, "form-label"], ["type", "text", "placeholder", "User name", "aria-label", "User name", "aria-describedby", "basic-addon2", "id", "userInRegister", 1, "form-control", 3, "value", "input"], ["userInput", ""], ["for", "emailInRegister", 1, "form-label"], ["type", "email", "placeholder", "Email", "aria-label", "Email", "aria-describedby", "basic-addon2", "id", "emailInRegister", 1, "form-control", 3, "value", "input"], ["nameInput", ""], ["for", "passwordInRegister", 1, "form-label"], ["type", "password", "aria-label", "Password", "aria-describedby", "basic-addon2", "id", "passwordInRegister", 1, "form-control", 3, "value", "input"], ["passInput", ""], ["for", "passwordInRegister2", 1, "form-label"], ["type", "password", "aria-label", "Repeat password", "aria-describedby", "basic-addon2", "id", "passwordInRegister2", 1, "form-control", 3, "value", "input"], ["passInput2", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7, 8)(11, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "User name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_13_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.userName = _r1.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7, 8)(17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_19_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.eMail = _r3.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7, 8)(23, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_25_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.password = _r5.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7, 8)(29, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Repeat password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_31_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.password2 = _r7.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21)(34, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_34_listener() {
        return ctx.onOkButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_36_listener() {
        return ctx.onCancelButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.registrationFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.registrationError);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.eMail);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.password2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
  encapsulation: 2
});

/***/ }),

/***/ 5957:
/*!********************************************!*\
  !*** ./src/app/views/sandbox.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SandboxComponent": () => (/* binding */ SandboxComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/internal/lastValueFrom */ 8611);
/* harmony import */ var _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../critters/CEditController */ 838);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../critters/CEditModel */ 866);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../critters/CrittersWorld */ 237);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../critters/CrittersView */ 197);
/* harmony import */ var _component_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-container.directive */ 702);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../critters/ZeroTimeController */ 329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../critters/critters-canvas/critters-canvas.component */ 986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../critters/time-control-panel/time-control-panel.component */ 54);



















function SandboxComponent_ng_template_12_Template(rf, ctx) {}

function SandboxComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", title_r7.slot);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](title_r7.name);
  }
}

function SandboxComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const title_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", title_r8.slot);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](title_r8.name);
  }
}

const _c0 = function (a0) {
  return {
    "display": a0
  };
};

class SandboxComponent {
  constructor(http, router, world, zeroTimeController) {
    this.http = http;
    this.router = router;
    this.world = world;
    this.zeroTimeController = zeroTimeController; // --------------------------------------------------------------

    this.savePopup = new SavePopup();
    this.loadPopup = new LoadPopup();
  }

  onSaveButton() {
    this.savePopup.open(this.http, this.world);
  }

  onLoadButton() {
    this.loadPopup.open(this.http, w => this.deserializeWorld(w));
  }

  deserializeWorld(data) {
    this.world.Clear();

    for (let i = 0; i < data.length; i = i + 2) {
      console.log("add cell", data[i], data[i + 1]);
      this.world.AddCell(data[i], data[i + 1]);
    }

    this.zeroTimeController.setThisTimeAsZero();
    this.world.notifyAboutChanges(_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.WorldCangesType.loaded);
  }

  ngOnInit() {
    this.world.TestInit();
    this.zeroTimeController.setThisTimeAsZero();
    this.world.notifyAboutChanges(_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.WorldCangesType.edited);
    console.log("sandbox ngOnInit()");
  }

  onNext() {
    console.log("onNext");
    this.world.RunSerie(1);
    this.world.notifyAboutChanges(_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.WorldCangesType.executed);
  }

}

SandboxComponent.ɵfac = function SandboxComponent_Factory(t) {
  return new (t || SandboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__.ZeroTimeController));
};

SandboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: SandboxComponent,
  selectors: [["app-sandbox"]],
  viewQuery: function SandboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_component_container_directive__WEBPACK_IMPORTED_MODULE_5__.ComponentContainerDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.dialogsHost = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld, _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__.CEditController, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_6__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__.ZeroTimeController])],
  decls: 49,
  vars: 9,
  consts: [[2, "background", "black", "height", "100vh", "display", "grid", "grid-template-rows", "max-content auto"], [2, "background-color", "#e3f2fd"], ["routerLink", "/home", 1, "btn", "btn-outline-primary", "m-1"], [1, "btn", "btn-outline-primary", "m-1", 3, "click"], [2, "background-color", "white", "position", "relative", "overflow", "hidden"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"], [2, "position", "fixed"], ["component-container", "", "style", "position: fixed"], ["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["multiple", "", "size", "10", "aria-label", "Select slot to save", 1, "form-select", 2, "overflow-y", "auto", 3, "change"], ["saveTitlesSel", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["titleinput", ""], ["type", "text", "placeholder", "World name", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value", "input"], ["nameInput", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["multiple", "", "size", "10", "aria-label", "Select world", 1, "form-select", 2, "overflow-y", "auto", 3, "change"], ["loadTitlesSel", ""], [3, "value"]],
  template: function SandboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_4_listener() {
        return ctx.onSaveButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_6_listener() {
        return ctx.onLoadButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Load");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "app-critters-canvas")(10, "app-time-control-panel", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, SandboxComponent_ng_template_12_Template, 0, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Save world");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 13)(20, "select", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SandboxComponent_Template_select_change_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](21);

        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.savePopup.onSlotSelect(_r1.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, SandboxComponent_option_22_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 17, 18)(26, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("input", function SandboxComponent_Template_input_input_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](27);

        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.savePopup.saveName = _r4.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 21)(29, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_29_listener() {
        return ctx.savePopup.onPopupOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_31_listener() {
        return ctx.savePopup.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 8)(34, "div", 9)(35, "div", 10)(36, "div", 11)(37, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Load world");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 13)(40, "select", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function SandboxComponent_Template_select_change_40_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9);

        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](41);

        return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.loadPopup.onSlotSelect(_r5.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, SandboxComponent_option_42_Template, 2, 2, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 21)(45, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_45_listener() {
        return ctx.loadPopup.onPopupOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " Load ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_47_listener() {
        return ctx.loadPopup.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c0, ctx.savePopup.savePopupDisplayStyle));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.savePopup.titles);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", ctx.savePopup.saveName);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c0, ctx.loadPopup.loadPopupDisplayStyle));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.loadPopup.titles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _component_container_directive__WEBPACK_IMPORTED_MODULE_5__.ComponentContainerDirective, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_8__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_9__.TimeControlPanelComponent],
  encapsulation: 2
});

class SavePopup {
  constructor() {
    this.titles = [];
    this.saveName = "";
    this.selectedSave = null;
    this.savePopupDisplayStyle = "none";
  }

  open(http, world) {
    // some slots can be free, some - busy
    // we show all array whith 10 slots;
    // empty slots marked in list and have name ---------
    // user can select slot and change name in dialog if neccessary;
    // name applyed when user save world.        
    this.http = http;
    this.world = world;
    this.titles = [];
    this.saveName = "";
    http.get("/sandboxworlds/titles").subscribe(titles => {
      this.titles = this.ToSlotList(titles);
    });
    this.savePopupDisplayStyle = "block";
  }

  ToSlotList(titles) {
    let result = [];

    for (let i = 1; i <= 10; i++) result.push({
      id: -1,
      slot: i,
      name: "<empty>"
    });

    for (let t of titles) result[t.slot - 1] = t;

    return result;
  }

  onSlotSelect(slot) {
    this.selectedSave = this.titles[slot - 1];

    if (this.selectedSave != null && this.selectedSave != undefined) {
      this.saveName = this.selectedSave.id == -1 ? "World " + this.selectedSave.slot : this.selectedSave.name;
    }
  }

  close() {
    this.savePopupDisplayStyle = "none";
  }

  onPopupOk() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("onSavePopupOk");
      _this.savePopupDisplayStyle = "none"; // save current world to slot        

      _this.selectedSave.name = _this.saveName; //this.selectedSave!.data = this.world.Serialize();

      yield _this.SaveWorld(_this.selectedSave).then(() => console.log("saved"));
      console.log("after save");
    })();
  }

  SaveWorld(worldTitle) {
    let s = new _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorldSerializer();
    let cellsData = s.SerializeCells(this.world);
    return (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this.http.post("/sandboxworlds/savetoslot", {
      slot: worldTitle?.slot,
      newName: worldTitle?.name,
      cellsData: cellsData
    }));
  }

}

class LoadPopup {
  constructor() {
    this.titles = [];
    this.selectedLoad = null;
    this.loadPopupDisplayStyle = "none";
  }

  open(http, resultCallback) {
    this.http = http;
    this.resultCallback = resultCallback;
    this.titles = [];
    http.get("/sandboxworlds/titles").subscribe(titles => {
      this.titles = this.ToSlotList(titles);
    });
    this.loadPopupDisplayStyle = "block";
  }

  ToSlotList(titles) {
    let result = [];

    for (let i = 1; i <= 10; i++) result.push({
      id: -1,
      slot: i,
      name: "<empty>"
    });

    for (let t of titles) result[t.slot - 1] = t;

    return result;
  }

  onSlotSelect(slot) {
    this.selectedLoad = this.titles[slot - 1];
    console.log("onSlotSelect", slot);

    if (this.selectedLoad != null && this.selectedLoad != undefined) {// enable buttons
    }
  }

  close() {
    this.loadPopupDisplayStyle = "none";
  }

  onPopupOk() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("onLoadPopupOk");
      _this2.loadPopupDisplayStyle = "none"; // load selected world 

      let loaded = yield (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(_this2.http.get("/sandboxworlds/loadfromslot?slot=" + _this2.selectedLoad?.slot));
      console.log("after load", loaded.cellsData);

      _this2.resultCallback(loaded.cellsData);
    })();
  }

}

class SandboxWorldTitleModel {
  constructor() {
    this.id = -1;
    this.slot = 0;
    this.name = "";
  }

}

/***/ }),

/***/ 542:
/*!**********************************************!*\
  !*** ./src/app/views/startpage.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartpageComponent": () => (/* binding */ StartpageComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _component_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-container.directive */ 702);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ 3392);
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.component */ 1662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);










function StartpageComponent_label_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("User: ", ctx_r0.userInfo.email, "");
  }
}

function StartpageComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StartpageComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.Logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function StartpageComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StartpageComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.Login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function StartpageComponent_ng_template_29_Template(rf, ctx) {}

class StartpageComponent {
  constructor(loginService) {
    this.loginService = loginService;
    this.userInfo = {
      email: "",
      signedIn: false
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.userInfo = yield _this.loginService.getCurrentUserInfo();
      console.log(_this.userInfo);
    })();
  }

  Login() {
    var _this2 = this;

    let login = this.dialogsHost.viewContainerRef.createComponent(_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent);
    login.instance.result.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (evt) {
        _this2.dialogsHost.viewContainerRef.clear();

        if (evt == 'register') {
          let register = _this2.dialogsHost.viewContainerRef.createComponent(_registration_component__WEBPACK_IMPORTED_MODULE_3__.RegistrationComponent);

          register.instance.result.subscribe(evt => {
            _this2.dialogsHost.viewContainerRef.clear();
          });
        }

        _this2.userInfo = yield _this2.loginService.getCurrentUserInfo();
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  Logout() {
    var _this3 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.loginService.Logout();
      _this3.userInfo = yield _this3.loginService.getCurrentUserInfo();
    })();
  }

}

StartpageComponent.ɵfac = function StartpageComponent_Factory(t) {
  return new (t || StartpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService));
};

StartpageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: StartpageComponent,
  selectors: [["app-startpage"]],
  viewQuery: function StartpageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_component_container_directive__WEBPACK_IMPORTED_MODULE_1__.ComponentContainerDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dialogsHost = _t.first);
    }
  },
  decls: 30,
  vars: 3,
  consts: [[1, "container-fluid", "vh-100", "bg-light"], [1, "container-fluid", "bg-light"], [1, "navbar", "navbar-expand-lg", "navbar-light", "fs-4", 2, "background-color", "#e3f2fd"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "justify-content-between", "w-50"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", 1, "nav-link", "active"], ["routerLink", "/sandbox", 1, "nav-link"], ["routerLink", "/wiki", 1, "nav-link"], ["routerLink", "/play", 1, "nav-link"], ["class", "text-body me-2 fs-5", 4, "ngIf"], ["class", "btn btn-outline-primary my-2 my-sm-0", "type", "submit", 3, "click", 4, "ngIf"], [2, "position", "fixed"], ["component-container", "", "style", "position: fixed"], [1, "text-body", "me-2", "fs-5"], ["type", "submit", 1, "btn", "btn-outline-primary", "my-2", "my-sm-0", 3, "click"]],
  template: function StartpageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "nav", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Sandbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Investigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, StartpageComponent_label_20_Template, 2, 1, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, StartpageComponent_button_21_Template, 2, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, StartpageComponent_button_22_Template, 2, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Critters is defined on a two-dimensional infinite grid of cells, which may be identified with the integer lattice. As in Conway's Game of Life, at any point in time each cell may be in one of two states: alive or dead. The Critters rule is a block cellular automaton using the Margolus neighborhood. This means that, at each step, the cells of the automaton are partitioned into 2 \u00D7 2 blocks and each block is updated independently of the other blocks. The center of a block at one time step becomes the corner of four blocks at the next time step, and vice versa; in this way, the four cells in each block belong to four different 2 \u00D7 2 blocks of the previous partition. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " (Wikipedia) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, StartpageComponent_ng_template_29_Template, 0, 0, "ng-template", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userInfo.signedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userInfo.signedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.userInfo.signedIn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _component_container_directive__WEBPACK_IMPORTED_MODULE_1__.ComponentContainerDirective],
  encapsulation: 2
});

/***/ }),

/***/ 7744:
/*!*************************************************!*\
  !*** ./src/app/views/wiki/article.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleComponent": () => (/* binding */ ArticleComponent),
/* harmony export */   "ArticleModel": () => (/* binding */ ArticleModel)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../critters/CEditController */ 838);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../critters/CEditModel */ 866);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../critters/CrittersWorld */ 237);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../critters/CrittersView */ 197);
/* harmony import */ var _critters_CEditControllerBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../critters/CEditControllerBase */ 323);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../critters/ZeroTimeController */ 329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../critters/critters-canvas/critters-canvas.component */ 986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../critters/time-control-panel/time-control-panel.component */ 54);

















const _c0 = function (a0) {
  return {
    "grid-template-columns": a0
  };
};

const _c1 = function (a0) {
  return {
    display: a0
  };
};

class ArticleComponent {
  constructor(http, route, world, zeroTimeController) {
    this.http = http;
    this.route = route;
    this.world = world;
    this.zeroTimeController = zeroTimeController;
    this.article = null;
  }

  CellsFieldIsEmpy() {
    return (this.article?.cellsData?.length ?? 0) == 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.params.subscribe(routeParams => {
        console.log("load start");

        _this.http.get("/article/" + routeParams.id).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (article) {
            console.log("Loaded");
            _this.article = article;

            _this.world.Clear();

            let data = article.cellsData;

            for (let i = 0; i < data.length; i = i + 2) _this.world.AddCell(data[i], data[i + 1]);

            _this.zeroTimeController.setThisTimeAsZero();

            setInterval(() => _this.world.notifyAboutChanges(_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.WorldCangesType.loaded));
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  ContentToHTML(content) {
    return content == undefined ? content : content.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}

ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
  return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__.ZeroTimeController));
};

ArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: ArticleComponent,
  selectors: [["app-article"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld, {
    provide: _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__.CEditController,
    useClass: _critters_CEditControllerBase__WEBPACK_IMPORTED_MODULE_5__.CEditControllerBase
  }, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_6__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__.ZeroTimeController])],
  decls: 13,
  vars: 9,
  consts: [[2, "height", "100%", "display", "grid", "position", "relative", "grid-template-areas", "'area1 area2' 'area1 area2'", "grid-template-columns", "50% 50%", "grid-template-rows", "auto 0%", 3, "ngStyle"], [2, "grid-template-rows", "max-content auto", "color", "black", "position", "relative"], [1, "p-3", 2, "position", "absolute", "top", "0px", "left", "0px", "right", "0px", "bottom", "0px", "overflow-y", "scroll"], [3, "innerHtml"], [1, "btn", "btn-primary", 2, "position", "absolute", "bottom", "20px", "right", "30px", 3, "routerLink"], [1, "fas", "fa-edit"], [2, "color", "black", "position", "relative", 3, "ngStyle"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"]],
  template: function ArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-critters-canvas")(12, "app-time-control-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](5, _c0, ctx.CellsFieldIsEmpy() ? "100% 0%" : "50% 50%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.article == null ? null : ctx.article.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHtml", ctx.ContentToHTML(ctx.article == null ? null : ctx.article.content), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("routerLink", "/wiki/edit/", ctx.article == null ? null : ctx.article.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](7, _c1, ctx.CellsFieldIsEmpy() ? "none" : "block"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_8__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_9__.TimeControlPanelComponent],
  encapsulation: 2
});
class ArticleModel {}

/***/ }),

/***/ 1786:
/*!**************************************************!*\
  !*** ./src/app/views/wiki/articles.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticlesComponent": () => (/* binding */ ArticlesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ArticlesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6)(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, article_r1.editionDate, "YYYY-MM-dd hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/wiki/article/", article_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.name ? article_r1.name : "no name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](article_r1.shortContent);
} }
class ArticlesComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.articles = [];
    }
    ngOnInit() {
        this.route.params.subscribe(routeParams => {
            console.log(routeParams);
            let request = routeParams.request;
            if (!request.startsWith('q:'))
                this.http.get("/articles/" + request).subscribe(articles => {
                    this.articles = articles;
                });
            else
                this.http.get("/articles/search/" + request.substr(2)).subscribe(articles => {
                    this.articles = articles;
                });
        });
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
ArticlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 1, vars: 1, consts: [["class", "p-2", 4, "ngFor", "ngForOf"], [1, "p-2"], [1, "fas", "fa-user"], [2, "display", "inline", "margin-left", "6px"], [1, "text-muted", 2, "display", "inline", "margin-left", "6px"], [1, "link-primary", 3, "routerLink"], [1, "text-muted"]], template: function ArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticlesComponent_div_0_Template, 15, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], encapsulation: 2 });
class ArticleTitleModel {
}


/***/ }),

/***/ 767:
/*!**********************************************!*\
  !*** ./src/app/views/wiki/edit.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleModel": () => (/* binding */ ArticleModel),
/* harmony export */   "EditArticleComponent": () => (/* binding */ EditArticleComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../critters/CrittersWorld */ 237);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../critters/CEditModel */ 866);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../critters/CrittersView */ 197);
/* harmony import */ var _critters_CEditController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../critters/CEditController */ 838);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../critters/ZeroTimeController */ 329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../critters/critters-canvas/critters-canvas.component */ 986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../critters/time-control-panel/time-control-panel.component */ 54);

















function EditArticleComponent_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("the maximum name length is 80 (", ctx_r1.nameLength, ")");
  }
}

function EditArticleComponent_label_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("the maximum content length is 10000 (", ctx_r3.contentLength, ")");
  }
}

class EditArticleComponent {
  constructor(http, route, router, location, world, zeroTimeController) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.location = location;
    this.world = world;
    this.zeroTimeController = zeroTimeController;
    this.article = new ArticleModel();
    this.isNew = false;
    this.nameLength = 0;
    this.contentLength = 0;
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      console.log(routeParams);
      if (routeParams.id != 'new') this.http.get("/article/" + routeParams.id).subscribe(article => {
        this.article = article;
        this.world.Clear();
        let data = article.cellsData;

        for (let i = 0; i < data.length; i = i + 2) this.world.AddCell(data[i], data[i + 1]);

        this.zeroTimeController.setThisTimeAsZero();
        setInterval(() => this.world.notifyAboutChanges(_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.loaded));
      });else {
        this.isNew = true;
        this.world.Clear();
        this.world.notifyAboutChanges(_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.loaded);
      }
    });
  }

  OnSave(name, text) {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(name, text);
      _this.article.content = text;
      _this.article.name = name;
      _this.article.status = 0;
      let s = new _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorldSerializer();
      let cellsData = s.SerializeCells(_this.world);
      _this.article.cellsData = cellsData;

      if (_this.isNew) {
        let newArticle = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.lastValueFrom)(yield _this.http.post("/article/new", _this.article));
        if (newArticle) _this.router.navigateByUrl("/wiki/article/" + newArticle.id);
      } else {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.lastValueFrom)(yield _this.http.put("/article/update", _this.article));

        _this.router.navigateByUrl("/wiki/article/" + _this.article.id);
      }
    })();
  }

  OnDelete() {
    console.log("/article/delete/" + this.article.id);
    this.http.delete("/article/delete/" + this.article.id).subscribe(() => {});
  }

  OnReject() {
    console.log("/article/reject/" + this.article.id);
    this.http.put("/article/reject/" + this.article.id, null).subscribe(() => {});
  }

  OnApprove() {
    console.log("/article/approve/" + this.article.id);
    this.http.put("/article/approve/" + this.article.id, null).subscribe(() => {});
  }

  OnPublish() {}

}

EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) {
  return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_6__.ZeroTimeController));
};

EditArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: EditArticleComponent,
  selectors: [["app-edit-article"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorld, _critters_CEditController__WEBPACK_IMPORTED_MODULE_4__.CEditController, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_3__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_5__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_6__.ZeroTimeController])],
  decls: 29,
  vars: 4,
  consts: [[2, "height", "100%", "display", "grid", "position", "relative", "grid-template-areas", "'area1 area2' 'buttons1 buttons2'", "grid-template-columns", "50% 50%", "grid-template-rows", "auto max-content"], [2, "display", "grid", "grid-template-rows", "max-content auto", "grid-area", "area1", "color", "black", "position", "relative"], [1, "m-2"], [1, "form-label"], [1, "form-control", 3, "value", "input"], ["articleName", ""], ["class", "form-label text-danger", 4, "ngIf"], [1, "m-2", 2, "display", "grid", "grid-template-rows", "max-content auto"], ["articleContent", ""], [2, "background", "rgb(255 106 0)", "grid-area", "area2", "color", "white", "position", "relative"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"], [2, "background", "rgb(240, 240, 240)", "grid-area", "buttons1", "color", "white", "position", "relative"], [1, "btn", "btn-outline-danger", "m-2", 3, "click"], [2, "background", "rgb(240, 240, 240)", "grid-area", "buttons2", "position", "relative"], [1, "btn", "btn-outline-success", "m-2", "float-end", 3, "click"], [1, "form-label", "text-danger"]],
  template: function EditArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Article title");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function EditArticleComponent_Template_input_input_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);

        return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.nameLength = _r0 == null ? null : _r0.value == null ? null : _r0.value.length);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, EditArticleComponent_label_7_Template, 2, 1, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Article text");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "textarea", 4, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function EditArticleComponent_Template_textarea_input_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.contentLength = _r2 == null ? null : _r2.value == null ? null : _r2.value.length);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, EditArticleComponent_label_13_Template, 2, 1, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-critters-canvas")(16, "app-time-control-panel", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 11)(18, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_18_listener() {
        return ctx.OnApprove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Approve");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_20_listener() {
        return ctx.OnReject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Reject");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_22_listener() {
        return ctx.OnDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_25_listener() {
        return ctx.OnPublish();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Publish");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.OnSave(_r0.value, _r2.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Save as draft");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.article ? ctx.article.name : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.nameLength) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0) > 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx.article ? ctx.article.content : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.contentLength) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0) > 10000);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_7__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_8__.TimeControlPanelComponent],
  encapsulation: 2
});
class ArticleModel {}

/***/ }),

/***/ 8929:
/*!**********************************************!*\
  !*** ./src/app/views/wiki/wiki.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WikiComponent": () => (/* binding */ WikiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);



class WikiComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    OnSearch(request) {
        this.router.navigateByUrl("/wiki/articles/q:" + request);
    }
}
WikiComponent.ɵfac = function WikiComponent_Factory(t) { return new (t || WikiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
WikiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WikiComponent, selectors: [["app-wiki"]], decls: 26, vars: 0, consts: [[2, "background", "green", "height", "100vh", "display", "grid", "position", "relative", "grid-template-areas", "'header1 header2' 'menu workArea'", "grid-template-columns", "200px auto", "grid-template-rows", "max-content auto"], [2, "background", "rgb(48, 59, 68)", "grid-area", "header1", "color", "white", "position", "relative"], ["routerLink", "/home", 1, "btn", "btn-outline-light", "m-2"], [1, "fas", "fa-home"], [2, "background", "rgb(48, 59, 68)", "grid-area", "header2", "color", "white", "position", "relative"], [1, "input-group", "mt-2", "float-start", 2, "width", "400px"], ["placeholder", "something to find", "aria-label", "Find", "aria-describedby", "basic-addon2", 1, "form-control"], ["searchInput", ""], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], ["routerLink", "edit/new", 1, "btn", "btn-success", "m-2", "float-end", 2, "grid-area", "header2"], [2, "background", "rgb(79, 90, 110)", "width", "200px", "grid-area", "menu", "color", "white"], ["routerLink", "article/Contents", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "article/Random", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/All", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/My", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "article/About", 1, "link-light", "m-3", 2, "display", "block"], [2, "background", "white", "grid-area", "workArea", "position", "relative"]], template: function WikiComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WikiComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.OnSearch(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Random article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "My articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About investigations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map