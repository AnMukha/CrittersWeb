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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_gameScreen_game_play_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/gameScreen/game-play-component */ 6719);
/* harmony import */ var _views_gameStart_game_start_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/gameStart/game-start.component */ 3268);
/* harmony import */ var _views_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/login.component */ 3392);
/* harmony import */ var _views_sandbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/sandbox.component */ 5957);
/* harmony import */ var _views_startpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/startpage.component */ 542);
/* harmony import */ var _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/wiki/article.component */ 7744);
/* harmony import */ var _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/wiki/articles.component */ 1786);
/* harmony import */ var _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/wiki/edit.component */ 1767);
/* harmony import */ var _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/wiki/wiki.component */ 8929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: _views_startpage_component__WEBPACK_IMPORTED_MODULE_4__.StartpageComponent },
    {
        path: "sandbox",
        component: _views_sandbox_component__WEBPACK_IMPORTED_MODULE_3__.SandboxComponent,
        canDeactivate: [(sandBox) => sandBox.exitConfirmRequired() ? window.confirm(sandBox.getExitConfirmText()) : true
        ]
    },
    {
        path: 'play', component: _views_gameStart_game_start_component__WEBPACK_IMPORTED_MODULE_1__.GameStartComponent
    },
    {
        path: 'gameplay/:id', component: _views_gameScreen_game_play_component__WEBPACK_IMPORTED_MODULE_0__.GamePlayComponent
    },
    {
        path: "wiki", component: _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_8__.WikiComponent,
        children: [
            {
                path: 'article/:id',
                component: _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_5__.ArticleComponent,
            },
            {
                path: 'edit/:id',
                component: _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_7__.EditArticleComponent,
                canDeactivate: [(editArt) => editArt.exitConfirmRequired() ? window.confirm(editArt.getExitConfirmText()) : true]
            },
            {
                path: 'articles/:request',
                component: _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_6__.ArticlesComponent
            },
        ],
    },
    { path: "login", component: _views_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, { useHash: true }), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
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
/* harmony import */ var _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/wiki/edit.component */ 1767);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./critters/critters-canvas/critters-canvas.component */ 4986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./critters/time-control-panel/time-control-panel.component */ 8054);
/* harmony import */ var _views_gameStart_game_start_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/gameStart/game-start.component */ 3268);
/* harmony import */ var _views_gameScreen_game_play_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/gameScreen/game-play-component */ 6719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
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
        _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_12__.TimeControlPanelComponent,
        _views_gameStart_game_start_component__WEBPACK_IMPORTED_MODULE_13__.GameStartComponent,
        _views_gameScreen_game_play_component__WEBPACK_IMPORTED_MODULE_14__.GamePlayComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] }); })();


/***/ }),

/***/ 4659:
/*!********************************************************************!*\
  !*** ./src/app/critters/CEditController/CrittersEditController.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrittersEditController": () => (/* binding */ CrittersEditController)
/* harmony export */ });
class CrittersEditController {
    mouseDownHandler(event) { }
    ;
    mouseUpHandler(event) { }
    ;
    mouseMoveHandler(event) { }
    ;
    mouseWheelHandler(event) { }
    ;
    touchStartHandler(event) { }
    ;
    touchEndHandler(event) { }
    ;
    touchMoveHandler(event) { }
    ;
}


/***/ }),

/***/ 71:
/*!**********************************************************!*\
  !*** ./src/app/critters/CEditController/EditCellRule.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCellRule": () => (/* binding */ EditCellRule)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CrittersWorld */ 6237);

class EditCellRule {
    constructor(cWorld, editModel) {
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.startPos = undefined;
    }
    onMouseDown(event) {
        this.startPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.offsetX, event.offsetY);
        return [];
    }
    onMouseUp(event) {
        let modified = false;
        if (this.startPos != undefined) {
            let endCell = this.editModel.cellXYInScr(event.offsetX, event.offsetY);
            if (Math.abs(this.startPos.x - event.offsetX) < EditCellRule.mouse_shift_to_edit && Math.abs(this.startPos.y - event.offsetY) < EditCellRule.mouse_shift_to_edit) {
                if (this.cWorld.getCell(endCell.x, endCell.y) === undefined)
                    this.cWorld.addCell(endCell.x, endCell.y, null);
                else
                    this.cWorld.clearCell(endCell.x, endCell.y);
                modified = true;
            }
            this.startPos = undefined;
        }
        return modified ? [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.CellsEditing] : [];
    }
}
EditCellRule.mouse_shift_to_edit = 4;


/***/ }),

/***/ 6333:
/*!***************************************************************************!*\
  !*** ./src/app/critters/CEditController/SandBoxCrittersEditController.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SandBoxCrittersEditController": () => (/* binding */ SandBoxCrittersEditController)
/* harmony export */ });
/* harmony import */ var _EditCellRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCellRule */ 71);
/* harmony import */ var _ScrollRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollRule */ 6290);
/* harmony import */ var _TouchScrollRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchScrollRule */ 8645);
/* harmony import */ var _WheelRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WheelRule */ 6795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CrittersWorld */ 6237);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CEditModel */ 7866);







class SandBoxCrittersEditController {
    constructor(cWorld, editModel) {
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.scrollRule = new _ScrollRule__WEBPACK_IMPORTED_MODULE_1__.ScrollRule(editModel);
        this.editCellRule = new _EditCellRule__WEBPACK_IMPORTED_MODULE_0__.EditCellRule(cWorld, editModel);
        this.wheelRule = new _WheelRule__WEBPACK_IMPORTED_MODULE_3__.WheelRule(editModel);
        this.touchScrollRule = new _TouchScrollRule__WEBPACK_IMPORTED_MODULE_2__.TouchScrollRule(cWorld, editModel);
    }
    mouseDownHandler(event) {
        let changings = [];
        changings.push(...this.editCellRule.onMouseDown(event));
        changings.push(...this.scrollRule.onMouseDown(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    mouseUpHandler(event) {
        let changings = [];
        changings.push(...this.editCellRule.onMouseUp(event));
        changings.push(...this.scrollRule.onMouseUp(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    mouseMoveHandler(event) {
        let changings = [];
        changings.push(...this.scrollRule.onMouseMove(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    touchStartHandler(event) {
        let changings = [];
        changings.push(...this.touchScrollRule.onTouchStart(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    touchEndHandler(event) {
        let changings = [];
        changings.push(...this.touchScrollRule.onTouchEnd(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    touchMoveHandler(event) {
        let changings = [];
        changings.push(...this.touchScrollRule.onTouchMove(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    mouseWheelHandler(event) {
        let changings = [];
        changings.push(...this.wheelRule.onWheel(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
}
SandBoxCrittersEditController.ɵfac = function SandBoxCrittersEditController_Factory(t) { return new (t || SandBoxCrittersEditController)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_4__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_CEditModel__WEBPACK_IMPORTED_MODULE_5__.CEditModel)); };
SandBoxCrittersEditController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: SandBoxCrittersEditController, factory: SandBoxCrittersEditController.ɵfac });


/***/ }),

/***/ 6290:
/*!********************************************************!*\
  !*** ./src/app/critters/CEditController/ScrollRule.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollRule": () => (/* binding */ ScrollRule)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CrittersWorld */ 6237);

class ScrollRule {
    constructor(editModel) {
        this.editModel = editModel;
        this.startPos = undefined;
        this.startFramePos = undefined;
    }
    onMouseDown(event) {
        this.startPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.offsetX, event.offsetY);
        this.startFramePos = this.editModel.getFramePos();
        return [];
    }
    onMouseUp(event) {
        if (this.startPos != undefined) {
            let curPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.offsetX, event.offsetY);
            this.editModel.x = this.startFramePos.x - this.editModel.scrdXToCell(curPos.x - this.startPos.x);
            this.editModel.y = this.startFramePos.y - this.editModel.scrdYToCell(curPos.y - this.startPos.y);
            this.startPos = undefined;
            return [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.FrameChanging];
        }
        return [];
    }
    onMouseMove(event) {
        if (this.startPos != undefined) {
            let curPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.offsetX, event.offsetY);
            this.editModel.x = this.startFramePos.x - this.editModel.scrdXToCell(curPos.x - this.startPos.x);
            this.editModel.y = this.startFramePos.y - this.editModel.scrdYToCell(curPos.y - this.startPos.y);
            return [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.FrameChanging];
        }
        return [];
    }
}


/***/ }),

/***/ 8645:
/*!*************************************************************!*\
  !*** ./src/app/critters/CEditController/TouchScrollRule.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TouchScrollRule": () => (/* binding */ TouchScrollRule)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CrittersWorld */ 6237);

class TouchScrollRule {
    constructor(cWorld, editModel) {
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.startPos1 = undefined;
        this.startPos2 = undefined;
        this.startFramePos = undefined;
        this.startScale = 1;
    }
    onTouchStart(event) {
        if (event.touches.length == 0)
            return [];
        var bcr = event.target.getBoundingClientRect();
        this.startPos1 = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.touches[0].clientX - bcr.x, event.touches[0].clientY - bcr.y);
        if (event.touches.length > 1) {
            this.startPos2 = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.touches[1].clientX - bcr.x, event.touches[1].clientY - bcr.y);
            this.startScale = this.editModel.scale;
        }
        this.startFramePos = this.editModel.getFramePos();
        return [];
    }
    onTouchEnd(event) {
        if (event.changedTouches.length == 0) {
            this.startPos1 = undefined;
            this.startPos2 = undefined;
            return [];
        }
        if (event.changedTouches.length == 1) {
            this.startPos2 = undefined;
        }
        if (this.startPos1 != undefined) {
            var bcr = event.target.getBoundingClientRect();
            let curPos = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.changedTouches[0].clientX - bcr.x, event.changedTouches[0].clientY - bcr.y);
            let endCell = this.editModel.cellXYInScr(curPos.x, curPos.y);
            if (event.changedTouches.length == 1 && Math.abs(this.startPos1.x - curPos.x) < 5 && Math.abs(this.startPos1.y - curPos.y) < 5) {
                if (this.cWorld.getCell(endCell.x, endCell.y) === undefined)
                    this.cWorld.addCell(endCell.x, endCell.y, null);
                else
                    this.cWorld.clearCell(endCell.x, endCell.y);
                return [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.CellsEditing];
            }
            else {
                this.editModel.x = this.startFramePos.x - this.editModel.scrdXToCell(curPos.x - this.startPos1.x);
                this.editModel.y = this.startFramePos.y - this.editModel.scrdYToCell(curPos.y - this.startPos1.y);
                this.startPos1 = undefined;
                return [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.FrameChanging];
            }
        }
        return [];
    }
    onTouchMove(event) {
        if (event.changedTouches.length == 0) {
            this.startPos1 = undefined;
            this.startPos2 = undefined;
            return [];
        }
        if (event.changedTouches.length == 1) {
            this.startPos2 = undefined;
        }
        var bcr = event.target.getBoundingClientRect();
        let curPos1 = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.touches[0].clientX - bcr.x, event.touches[0].clientY - bcr.y);
        let curPos2 = undefined;
        if (event.touches.length > 1)
            curPos2 = new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(event.touches[1].clientX - bcr.x, event.touches[1].clientY - bcr.y);
        if (this.startPos1 != undefined && this.startPos2 != undefined && curPos2 != undefined) {
            this.editModel.scale = this.startScale / this.startPos1.dist(this.startPos2) * curPos1.dist(curPos2);
        }
        if (this.startPos1 != undefined) {
            this.editModel.x = this.startFramePos.x - this.editModel.scrdXToCell(curPos1.x - this.startPos1.x);
            this.editModel.y = this.startFramePos.y - this.editModel.scrdYToCell(curPos1.y - this.startPos1.y);
            return [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.FrameChanging];
        }
        return [];
    }
}


/***/ }),

/***/ 1393:
/*!****************************************************************************!*\
  !*** ./src/app/critters/CEditController/ViewOnlyCrittersEditController.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewOnlyCrittersEditController": () => (/* binding */ ViewOnlyCrittersEditController)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CrittersWorld */ 6237);
/* harmony import */ var _ScrollRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollRule */ 6290);
/* harmony import */ var _TouchScrollRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TouchScrollRule */ 8645);
/* harmony import */ var _WheelRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WheelRule */ 6795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CEditModel */ 7866);







class ViewOnlyCrittersEditController {
    constructor(cWorld, editModel) {
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.scrollRule = new _ScrollRule__WEBPACK_IMPORTED_MODULE_1__.ScrollRule(editModel);
        this.wheelRule = new _WheelRule__WEBPACK_IMPORTED_MODULE_3__.WheelRule(editModel);
        this.touchScrollRule = new _TouchScrollRule__WEBPACK_IMPORTED_MODULE_2__.TouchScrollRule(cWorld, editModel);
    }
    mouseDownHandler(event) {
        let changings = [];
        changings.push(...this.scrollRule.onMouseDown(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    mouseUpHandler(event) {
        let changings = [];
        changings.push(...this.scrollRule.onMouseUp(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    mouseMoveHandler(event) {
        let changings = [];
        changings.push(...this.scrollRule.onMouseMove(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    touchStartHandler(event) {
        let changings = [];
        changings.push(...this.touchScrollRule.onTouchStart(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    touchEndHandler(event) {
        let changings = [];
        changings.push(...this.touchScrollRule.onTouchEnd(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    touchMoveHandler(event) {
        let changings = [];
        changings.push(...this.touchScrollRule.onTouchMove(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
    mouseWheelHandler(event) {
        let changings = [];
        changings.push(...this.wheelRule.onWheel(event));
        if (changings.length > 0)
            this.cWorld.notifyAboutChanges(changings);
    }
}
ViewOnlyCrittersEditController.ɵfac = function ViewOnlyCrittersEditController_Factory(t) { return new (t || ViewOnlyCrittersEditController)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_CEditModel__WEBPACK_IMPORTED_MODULE_4__.CEditModel)); };
ViewOnlyCrittersEditController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ViewOnlyCrittersEditController, factory: ViewOnlyCrittersEditController.ɵfac });


/***/ }),

/***/ 6795:
/*!*******************************************************!*\
  !*** ./src/app/critters/CEditController/WheelRule.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WheelRule": () => (/* binding */ WheelRule)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CrittersWorld */ 6237);

class WheelRule {
    constructor(editModel) {
        this.editModel = editModel;
        this.startPos = undefined;
        this.startFramePos = undefined;
    }
    onWheel(event) {
        console.log(event);
        let mouseX0 = this.editModel.scrXToCell(event.offsetX);
        let mouseY0 = this.editModel.ScrYToCell(event.offsetY);
        if (event.deltaY > 0 && this.editModel.scale > 0.7 || event.deltaY < 0 && this.editModel.scale < 100)
            this.editModel.scale = this.editModel.scale * Math.pow(1.1, -event.deltaY / 120);
        let mouseX = this.editModel.scrXToCell(event.offsetX);
        let mouseY = this.editModel.ScrYToCell(event.offsetY);
        this.editModel.x -= mouseX - mouseX0;
        this.editModel.y -= mouseY - mouseY0;
        return [_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.FrameChanging];
    }
}


/***/ }),

/***/ 7866:
/*!****************************************!*\
  !*** ./src/app/critters/CEditModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditModel": () => (/* binding */ CEditModel)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 6237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class CEditModel {
    constructor() {
        this.scale = 10;
        this.x = 0;
        this.y = 0;
        this.gridActual = false;
        this.changesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    cellXToScr(x) {
        return (x - this.x) * this.scale;
    }
    cellYToScr(y) {
        return (y - this.y) * this.scale;
    }
    celldXToScr(dx) {
        return dx * this.scale;
    }
    celldYToScr(dy) {
        return dy * this.scale;
    }
    scrXToCell(x) {
        return this.x + x / this.scale;
    }
    ScrYToCell(y) {
        return this.y + y / this.scale;
    }
    scrdXToCell(x) {
        return x / this.scale;
    }
    scrdYToCell(y) {
        return y / this.scale;
    }
    cellXYInScr(x, y) {
        return new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(Math.floor(this.scrXToCell(x)), Math.floor(this.ScrYToCell(y)));
    }
    getFramePos() {
        return new _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CPoint(this.x, this.y);
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
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 6237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ZeroTimeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ZeroTimeController */ 8329);




class CTimeController {
    constructor(world, ztContorller) {
        this.world = world;
        this.ztContorller = ztContorller;
        this.speed = 0;
        this.timeForward = true;
        this.execTimer = undefined;
    }
    step() {
        this.runSerie(1);
        this.world.notifyAboutChanges([_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Executed]);
        this.toOddStep();
    }
    runSerie(stepCount) {
        var stNum = this.world.getStepNum();
        for (let n = stNum; n < stNum + stepCount; n++) {
            if (this.world.isZeroTime())
                this.ztContorller.beforeZeroTimePass();
            this.world.runSerie(stepCount);
        }
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
            let stepCount = 1;
            let interval = 1 / this.speed * 1000;
            if (interval < 20) {
                stepCount = Math.round(20 / interval);
                interval = 20;
            }
            ;
            this.runSerie(stepCount);
            this.world.notifyAboutChanges([_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Executed]);
            //if (!this.world.IsZeroTime()) 
            this.execTimer = setTimeout(() => this.stepOnTimer(), interval);
            //else {
            //this.speed = 0;
            //if (this.onZeroStateCallback)
            //this.onZeroStateCallback();
            //}
        }
        else {
            if (this.execTimer)
                clearTimeout(this.execTimer);
            this.execTimer = undefined;
        }
    }
    toOddStep() {
        if (this.world.isEvenStep())
            setTimeout(() => {
                if (this.world.isEvenStep()) {
                    this.runSerie(1);
                    this.world.notifyAboutChanges([_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Executed]);
                }
            }, 500);
    }
    setTimeDirection(forward) {
        if (this.timeForward != forward)
            this.timeForward = forward;
        if (this.world.isForwardTimeDirection() != forward) {
            this.world.reverseTimeDirection();
            this.toOddStep();
        }
    }
}
CTimeController.ɵfac = function CTimeController_Factory(t) { return new (t || CTimeController)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ZeroTimeController__WEBPACK_IMPORTED_MODULE_1__.ZeroTimeController)); };
CTimeController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CTimeController, factory: CTimeController.ɵfac });


/***/ }),

/***/ 9197:
/*!******************************************!*\
  !*** ./src/app/critters/CrittersView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrittersView": () => (/* binding */ CrittersView)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 6237);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CEditModel */ 7866);



class CrittersView {
    constructor(world, editModel) {
        this.world = world;
        this.editModel = editModel;
        this.paintConfig = new PaintConfig();
    }
    paint(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
        if (this.paintConfig.paintGrid)
            this.paintGrid(ctx);
        if (this.paintConfig.paintInfo)
            this.paintInfo(ctx);
        ctx.fillStyle = this.paintConfig.cellFillStyle;
        for (let c of this.world.getCells()) {
            let x = this.editModel.cellXToScr(c.x);
            let y = this.editModel.cellYToScr(c.y);
            if (x < canvas.width && x > 0 - this.editModel.scale
                && y > 0 - this.editModel.scale && y < canvas.height) {
                ctx.fillRect(x, y, this.editModel.scale, this.editModel.scale);
            }
        }
    }
    paintGrid(ctx) {
        if (this.editModel.scale < 2)
            return;
        let x0 = Math.floor(this.editModel.scrXToCell(0) / 2) * 2 - 3;
        let x1 = Math.floor(this.editModel.scrXToCell(ctx.canvas.width) / 2) * 2 + 3;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        for (let x = x0; x <= x1; x = x + 2) {
            ctx.beginPath();
            let xs = this.editModel.cellXToScr(x);
            ctx.moveTo(xs, 0);
            ctx.lineTo(xs, ctx.canvas.height);
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
        let y0 = Math.floor(this.editModel.ScrYToCell(0) / 2) * 2 - 3;
        let y1 = Math.floor(this.editModel.ScrYToCell(ctx.canvas.height) / 2) * 2 + 3;
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.3)';
        for (let y = y0; y <= y1; y = y + 2) {
            ctx.beginPath();
            let ys = this.editModel.cellYToScr(y);
            ctx.moveTo(0, ys);
            ctx.lineTo(ctx.canvas.width, ys);
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
    paintInfo(ctx) {
        let text = (this.world.getStepNum() - 1).toString();
        ctx.font = "15px Arial";
        ctx.fillStyle = "rgb(13,110,253)";
        ctx.fillText(text, ctx.canvas.width - 50, 30);
    }
    getPaintConfig() {
        return this.paintConfig;
    }
    setPaintConfig(cfg) {
        this.paintConfig = cfg;
    }
}
CrittersView.ɵfac = function CrittersView_Factory(t) { return new (t || CrittersView)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_CEditModel__WEBPACK_IMPORTED_MODULE_1__.CEditModel)); };
CrittersView.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CrittersView, factory: CrittersView.ɵfac });
class PaintConfig {
    constructor() {
        this.cellFillStyle = "green";
        this.paintGrid = true;
        this.paintInfo = true;
    }
}


/***/ }),

/***/ 6237:
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
/* harmony export */   "WorldCangesType": () => (/* binding */ WorldCangesType)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class CrittersWorld {
    constructor() {
        this.cells = new Map();
        this.stepNum = 1;
        this.forward = true;
        this.modified = false;
        this.cellKeyGen = 0;
        this.changesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    addCell(x, y, heroId) {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let resultCell = new Cell(this.nextCellKey(), x, y, heroId, this.stepNum);
        this.cells.set(key, resultCell);
        return resultCell;
    }
    getCells() {
        return this.cells.values();
    }
    nextCellKey() {
        this.cellKeyGen++;
        return this.cellKeyGen;
    }
    notifyAboutChanges(changeTypes) {
        if (changeTypes.includes(WorldCangesType.CellsEditing))
            this.modified = true;
        this.changesSubject.next(changeTypes);
    }
    resetModificationFlag() {
        this.modified = false;
    }
    wasModified() {
        return this.modified;
    }
    // Очистить клетку, если занята        
    clearCell(x, y) {
        let key = x * Cell.KEY_GEN_FACTOR + y;
        let c = this.cells.get(key);
        if (c)
            this.removeCell(key, c);
    }
    removeCell(key, cl) {
        this.cells.delete(key);
    }
    isEvenStep() {
        return this.stepNum % 2 == 0;
    }
    getStepNum() {
        return this.stepNum;
    }
    runSerie(stepCnt) {
        for (let i = 0; i < stepCnt; i++)
            this.run();
    }
    clear() {
        this.cells.clear();
        this.cellKeyGen = 0;
        this.stepNum = 1;
    }
    reverseTimeDirection() {
        if (this.forward)
            this.stepNum--;
        else
            this.stepNum++;
        this.forward = !this.forward;
    }
    isForwardTimeDirection() {
        return this.forward;
    }
    run() {
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
    getCellsCount() {
        return this.cells.size;
    }
    getCell(x, y) {
        return this.cells.get(x * Cell.KEY_GEN_FACTOR + y);
    }
    findInArea(rectangle) {
        let result = [];
        for (let c of this.cells.entries()) {
            let cell = c[1];
            if (rectangle.containsInXY(cell.x, cell.y))
                result.push(cell);
        }
        return result;
    }
    deleteCells(deleted) {
        for (let c of deleted)
            this.cells.delete(c.getKey());
    }
    moveCellsTo(cls, dx, dy) {
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
    setThisTimeAsZero() {
        if (this.stepNum == 1)
            return;
        this.stepNum = 1;
        this.forward = true;
        for (let c of this.cells.values())
            c.prosessedStep = 1;
    }
    isZeroTime() {
        return this.stepNum == 1;
    }
    runToZeroTime() {
        if (!this.forward) {
            this.reverseTimeDirection();
            if (this.isEvenStep())
                this.runSerie(1);
        }
        if (this.stepNum == 1)
            return;
        let distToZero = Math.abs(this.stepNum - 1);
        if (this.stepNum > 1)
            this.reverseTimeDirection();
        this.runSerie(distToZero);
        this.setThisTimeAsZero();
    }
    makeSnapshot() {
        let resultCells = [];
        for (let value of this.cells.values()) {
            resultCells.push(value.clone());
        }
        return { cells: resultCells };
    }
    loadSnapshot(snapshot) {
        this.clear();
        this.stepNum = 1;
        this.forward = true;
        for (let c of snapshot.cells) {
            c.prosessedStep = this.stepNum;
            this.cells.set(c.x * Cell.KEY_GEN_FACTOR + c.y, c.clone());
        }
    }
    testInit() {
        this.addCell(10, 10, null);
        this.addCell(11, 11, null);
        this.addCell(10, 11, null);
        this.addCell(12, 11, null);
    }
}
CrittersWorld.ɵfac = function CrittersWorld_Factory(t) { return new (t || CrittersWorld)(); };
CrittersWorld.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CrittersWorld, factory: CrittersWorld.ɵfac });
class Cell {
    constructor(id, x, y, heroId, procStep) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.heroId = heroId;
        this.prosessedStep = procStep;
    }
    getKey() {
        return this.x * Cell.KEY_GEN_FACTOR + this.y;
    }
    moveTo(toX, toY) {
        this.x = toX;
        this.y = toY;
    }
    clone() {
        return new Cell(this.id, this.x, this.y, this.heroId, this.prosessedStep);
    }
}
Cell.KEY_GEN_FACTOR = 1000000000;
class CRect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getTop() { return this.y; }
    getRight() { return this.x + this.width; }
    getLeft() { return this.x; }
    getBottom() { return this.y + this.height; }
    containsInXY(x, y) {
        return x >= this.x && x < this.x + this.width && y >= this.y && y < this.y + this.height;
    }
    contains(p) {
        return p.x >= this.x && p.x < this.x + this.width && p.y >= this.y && p.y < this.y + this.height;
    }
}
class CPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    dist(p) {
        return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
    }
}
var WorldCangesType;
(function (WorldCangesType) {
    WorldCangesType[WorldCangesType["CellsEditing"] = 0] = "CellsEditing";
    WorldCangesType[WorldCangesType["FrameChanging"] = 1] = "FrameChanging";
    WorldCangesType[WorldCangesType["ToolsChanging"] = 2] = "ToolsChanging";
    WorldCangesType[WorldCangesType["Loaded"] = 3] = "Loaded";
    WorldCangesType[WorldCangesType["Executed"] = 4] = "Executed";
})(WorldCangesType || (WorldCangesType = {}));


/***/ }),

/***/ 8329:
/*!************************************************!*\
  !*** ./src/app/critters/ZeroTimeController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZeroTimeController": () => (/* binding */ ZeroTimeController)
/* harmony export */ });
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrittersWorld */ 6237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class ZeroTimeController {
    constructor(world) {
        this.world = world;
        this.wasEditedAtNotZeroTime = false;
        this.wasEditedAtZeroTime = false;
        world.changesSubject.subscribe(ch => {
            if (ch.includes(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.CellsEditing) && !world.isZeroTime())
                this.wasEditedAtNotZeroTime = true;
            if (ch.includes(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Loaded))
                this.wasEditedAtNotZeroTime = false;
            if (ch.includes(_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.CellsEditing) && world.isZeroTime())
                this.wasEditedAtZeroTime = true;
        });
    }
    setThisTimeAsZero() {
        if (this.world.isEvenStep())
            return;
        this.snapshot = this.world.makeSnapshot();
        this.world.setThisTimeAsZero();
        this.world.notifyAboutChanges([_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Loaded]);
    }
    goToZeroTime() {
        if (this.wasEditedAtNotZeroTime) {
            this.world.notifyAboutChanges([_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Executed]);
            this.world.runToZeroTime();
            this.snapshot = this.world.makeSnapshot();
            this.wasEditedAtZeroTime = false;
            this.wasEditedAtNotZeroTime = false;
        }
        else if (this.snapshot) {
            this.world.loadSnapshot(this.snapshot);
            this.wasEditedAtZeroTime = false;
            this.wasEditedAtNotZeroTime = false;
            this.world.notifyAboutChanges([_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.WorldCangesType.Loaded]);
        }
    }
    beforeZeroTimePass() {
        if (!this.world.isZeroTime() || !this.world.isForwardTimeDirection())
            return;
        if (this.wasEditedAtZeroTime) {
            this.snapshot = this.world.makeSnapshot();
            this.wasEditedAtZeroTime = false;
        }
    }
}
ZeroTimeController.ɵfac = function ZeroTimeController_Factory(t) { return new (t || ZeroTimeController)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_0__.CrittersWorld)); };
ZeroTimeController.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ZeroTimeController, factory: ZeroTimeController.ɵfac });


/***/ }),

/***/ 4986:
/*!***********************************************************************!*\
  !*** ./src/app/critters/critters-canvas/critters-canvas.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrittersCanvasComponent": () => (/* binding */ CrittersCanvasComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CEditController/CrittersEditController */ 4659);
/* harmony import */ var _CrittersView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CrittersView */ 9197);
/* harmony import */ var _CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CEditModel */ 7866);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CrittersWorld */ 6237);






class CrittersCanvasComponent {
    constructor(editController, crittersView, editModel, crittersWorld) {
        this.editController = editController;
        this.crittersView = crittersView;
        this.editModel = editModel;
        this.crittersWorld = crittersWorld;
        this.canvasColor = 'white';
    }
    ngOnInit() {
        this._canvas = document.getElementById("c_canvas");
        this.crittersWorld.changesSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.bufferTime)(1 / 50.0)).subscribe((n) => this.crittersView.paint(this._canvas));
        this.editModel.changesSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.bufferTime)(1 / 50.0)).subscribe((n) => this.crittersView.paint(this._canvas));
        this.crittersView.paint(this._canvas);
    }
    onResized(event) {
        this.crittersView.paint(this._canvas);
    }
    onMouseDown(event) {
        event.preventDefault();
        this.editController.mouseDownHandler(event);
    }
    onMouseUp(event) {
        event.preventDefault();
        this.editController.mouseUpHandler(event);
    }
    onMouseMove(event) {
        event.preventDefault();
        this.editController.mouseMoveHandler(event);
    }
    onMouseWheel(event) {
        event.preventDefault();
        this.editController.mouseWheelHandler(event);
    }
    onTouchStart(event) {
        event.preventDefault();
        this.editController.touchStartHandler(event);
    }
    onTouchEnd(event) {
        event.preventDefault();
        this.editController.touchEndHandler(event);
    }
    onTouchMove(event) {
        event.preventDefault();
        this.editController.touchMoveHandler(event);
    }
}
CrittersCanvasComponent.ɵfac = function CrittersCanvasComponent_Factory(t) { return new (t || CrittersCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_0__.CrittersEditController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_CrittersView__WEBPACK_IMPORTED_MODULE_1__.CrittersView), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld)); };
CrittersCanvasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CrittersCanvasComponent, selectors: [["app-critters-canvas"]], inputs: { canvasColor: "canvasColor" }, decls: 1, vars: 2, consts: [["id", "c_canvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", 3, "mousedown", "mouseup", "mousemove", "wheel", "touchstart", "touchend", "touchmove"]], template: function CrittersCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function CrittersCanvasComponent_Template_canvas_mousedown_0_listener($event) { return ctx.onMouseDown($event); })("mouseup", function CrittersCanvasComponent_Template_canvas_mouseup_0_listener($event) { return ctx.onMouseUp($event); })("mousemove", function CrittersCanvasComponent_Template_canvas_mousemove_0_listener($event) { return ctx.onMouseMove($event); })("wheel", function CrittersCanvasComponent_Template_canvas_wheel_0_listener($event) { return ctx.onMouseWheel($event); })("touchstart", function CrittersCanvasComponent_Template_canvas_touchstart_0_listener($event) { return ctx.onTouchStart($event); })("touchend", function CrittersCanvasComponent_Template_canvas_touchend_0_listener($event) { return ctx.onTouchEnd($event); })("touchmove", function CrittersCanvasComponent_Template_canvas_touchmove_0_listener($event) { return ctx.onTouchMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.canvasColor);
    } }, encapsulation: 2 });


/***/ }),

/***/ 8054:
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
/* harmony import */ var _ZeroTimeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ZeroTimeController */ 8329);
/* harmony import */ var _CrittersWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CrittersWorld */ 6237);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





class TimeControlPanelComponent {
    constructor(timeController, zeroTimeController, world) {
        this.timeController = timeController;
        this.zeroTimeController = zeroTimeController;
        this.world = world;
        this.MAX_SPEED = 1030;
        this.speed = 0;
        this.timeDirectionForward = true;
    }
    ngOnInit() {
        /*this.timeController.onZeroState(() => {
            this.speed = 0;
            this.timeController.setSpeed(0)
        }
        );*/
    }
    onStepOrStop() {
        if (this.speed == 0) {
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
TimeControlPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TimeControlPanelComponent, selectors: [["app-time-control-panel"]], decls: 12, vars: 6, consts: [[1, "p-3"], [1, "btn", "btn-outline-primary", "m-1", 3, "click"], [3, "ngClass"], [1, "fas", "fa-caret-right"], [1, "fas", "fa-caret-left"]], template: function TimeControlPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_1_listener() { return ctx.onStepOrStop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_3_listener() { return ctx.onRunOrFaster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_6_listener() { return ctx.onReverseTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TimeControlPanelComponent_Template_button_click_8_listener() { return ctx.onToStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.speed == 0 ? ctx.timeDirectionForward ? "fas fa-forward-step" : "fas fa-backward-step" : "fas fa-stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("font-size", ctx.speed > 99 ? "12px" : "18px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.speed + " ", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.timeDirectionForward ? "fas fa-forward fs-6" : "fas fa-backward fs-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.timeDirectionForward ? "fas fa-rotate-back" : "fas fa-rotate-forward");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["div[_ngcontent-%COMP%] \r\n{\r\n    background-color: rgba(222, 222, 222, 0.7);    \r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtY29udHJvbC1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLDBDQUEwQztBQUM5QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJ0aW1lLWNvbnRyb2wtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDIyMiwgMjIyLCAwLjcpOyAgICBcclxufVxyXG5idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 687:
/*!**********************************************************!*\
  !*** ./src/app/dto/Serializers/cells-data-serializer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellsDataSerializer": () => (/* binding */ CellsDataSerializer)
/* harmony export */ });
class CellsDataSerializer {
    serializeCells(cells) {
        let result = [];
        for (let c of cells) {
            result.push(c.x);
            result.push(c.y);
            result.push(c.heroId ?? -1);
        }
        return result;
    }
    deserializeCells(cellsData, world) {
        // serialyaer works with world directly for better performance
        for (let i = 0; i < cellsData.length; i = i + 3) {
            world.addCell(cellsData[i], cellsData[i + 1], cellsData[i + 2]);
        }
    }
}


/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginResult": () => (/* binding */ LoginResult),
/* harmony export */   "LoginService": () => (/* binding */ LoginService),
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class LoginService {
  constructor(http) {
    this.http = http;
    this.userInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
      name: "",
      signedIn: false,
      admin: false
    });
    this.getUserInfo().then(ui => this.userInfo.next(ui));
  }

  getUserInfo() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(_this.http.get("/account/userinfo"));
    })();
  }

  logout() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var success = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(_this2.http.get("/account/logout"));
      if (success) _this2.userInfo.next({
        name: "",
        signedIn: false,
        admin: false
      });
    })();
  }

  login(emailOrName, password) {
    var _this3 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let isEmail = emailOrName.indexOf('@') != -1;
      var loginResult = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(_this3.http.post("/account/Login", {
        UserName: isEmail ? null : emailOrName,
        Mail: isEmail ? emailOrName : null,
        password: password
      }));
      let userInfo = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(_this3.http.get("/account/userinfo"));

      _this3.userInfo.next(userInfo);

      return loginResult;
    })();
  }

}

LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});
class UserInfo {}
var LoginResult;

(function (LoginResult) {
  LoginResult[LoginResult["Success"] = 0] = "Success";
  LoginResult[LoginResult["UserNotFound"] = 1] = "UserNotFound";
  LoginResult[LoginResult["MailNotConfirmed"] = 2] = "MailNotConfirmed";
  LoginResult[LoginResult["AlreadySignedIn"] = 3] = "AlreadySignedIn";
  LoginResult[LoginResult["WrongPassword"] = 4] = "WrongPassword";
})(LoginResult || (LoginResult = {}));

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
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 3392);
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.component */ 1662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ComponentContainerDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  showLoginDialog(resultCallBack) {
    var _this = this;

    let login = this.viewContainerRef.createComponent(_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent);
    login.instance.result.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (evt) {
        _this.viewContainerRef.clear();

        if (evt == 'register') {
          let register = _this.viewContainerRef.createComponent(_registration_component__WEBPACK_IMPORTED_MODULE_2__.RegistrationComponent);

          register.instance.result.subscribe(evt => {
            _this.viewContainerRef.clear();
          });
        } else resultCallBack(evt);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

}

ComponentContainerDirective.ɵfac = function ComponentContainerDirective_Factory(t) {
  return new (t || ComponentContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef));
};

ComponentContainerDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ComponentContainerDirective,
  selectors: [["", "component-container", ""]]
});

/***/ }),

/***/ 6719:
/*!*********************************************************!*\
  !*** ./src/app/views/gameScreen/game-play-component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePlayComponent": () => (/* binding */ GamePlayComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../critters/CEditController/CrittersEditController */ 4659);
/* harmony import */ var _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../critters/CEditController/SandBoxCrittersEditController */ 6333);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../critters/CEditModel */ 7866);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../critters/CrittersView */ 9197);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../critters/CrittersWorld */ 6237);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../critters/ZeroTimeController */ 8329);
/* harmony import */ var _game_world_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-world-loader */ 302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../critters/critters-canvas/critters-canvas.component */ 4986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../critters/time-control-panel/time-control-panel.component */ 8054);

















class GamePlayComponent {
  constructor(world, zeroTimeController, ec, http, route) {
    this.world = world;
    this.zeroTimeController = zeroTimeController;
    this.ec = ec;
    this.http = http;
    this.route = route;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("game init");

      _this.loadWorld();
    })();
  }

  loadWorld() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.route.params.subscribe(routeParams => {
        let worldId = routeParams.id;
        let url = worldId.toLowerCase() == "main" ? "/gameworld/getmainworld" : "/getworld/" + worldId;

        _this2.http.get(url).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (w) {
            _this2.deserializeWorld(w);
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  deserializeWorld(world) {
    let loader = new _game_world_loader__WEBPACK_IMPORTED_MODULE_8__.GameWorldLoader();
    loader.LoadWorldFromDto(world, this.world);
  }

}

GamePlayComponent.ɵfac = function GamePlayComponent_Factory(t) {
  return new (t || GamePlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__.ZeroTimeController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_1__.CrittersEditController), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
};

GamePlayComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: GamePlayComponent,
  selectors: [["game-play"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__.CrittersWorld, {
    provide: _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_1__.CrittersEditController,
    useClass: _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_2__.SandBoxCrittersEditController
  }, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_3__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_6__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_7__.ZeroTimeController])],
  decls: 6,
  vars: 0,
  consts: [[2, "background", "rgb(79, 90, 110)", "height", "100vh", "position", "relative", "display", "grid", "grid-template-areas", "tools field info", "grid-template-columns", "100px auto 100px"], [2, "background-color", "aquamarine"], [2, "background-color", "white", "position", "relative", "overflow", "hidden", "height", "100%"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"]],
  template: function GamePlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-critters-canvas")(4, "app-time-control-panel", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_9__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_10__.TimeControlPanelComponent],
  encapsulation: 2
});

/***/ }),

/***/ 302:
/*!*******************************************************!*\
  !*** ./src/app/views/gameScreen/game-world-loader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameWorldLoader": () => (/* binding */ GameWorldLoader)
/* harmony export */ });
/* harmony import */ var _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dto/Serializers/cells-data-serializer */ 687);

class GameWorldLoader {
    constructor() {
        this.cellsDataSerializer = new _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_0__.CellsDataSerializer();
    }
    LoadWorldFromDto(worldDto, world) {
        world.clear();
        this.areasCellsToWorld(worldDto, world);
        this.currentHeroToWorld();
        this.otherHeroesToWorld();
    }
    areasCellsToWorld(worldDto, world) {
        for (let area of worldDto.localSpaceAreas)
            this.cellsDataSerializer.deserializeCells(area.cellsData, world);
    }
    currentHeroToWorld() {
    }
    otherHeroesToWorld() {
    }
}


/***/ }),

/***/ 3268:
/*!*********************************************************!*\
  !*** ./src/app/views/gameStart/game-start.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStartComponent": () => (/* binding */ GameStartComponent)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class GameStartComponent {
  constructor() {}

  ngOnInit() {
    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

}

GameStartComponent.ɵfac = function GameStartComponent_Factory(t) {
  return new (t || GameStartComponent)();
};

GameStartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GameStartComponent,
  selectors: [["game-start"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([])],
  decls: 3,
  vars: 0,
  consts: [[2, "background", "rgb(79, 90, 110)", "height", "100vh", "display", "flex", "justify-content", "center", "align-items", "center", "position", "relative", "flex-direction", "column"], ["routerLink", "/gameplay/main", 1, "m-2", "btn", "btn-outline-light", 2, "width", "200px", "height", "40px"]],
  template: function GameStartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Play in the main world");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  encapsulation: 2
});

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);










function LoginComponent_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.getPasswordChangeMessage());
  }
}

const _c0 = function () {
  return [];
};

function LoginComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_a_24_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);

      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onForgotPasswordLink(_r1.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}

const _c1 = function () {
  return {
    "display": "block"
  };
};

class LoginComponent {
  constructor(http, loginService) {
    this.http = http;
    this.loginService = loginService;
    this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.loginResult = undefined;
    this.passwordChangeResult = null;
  }

  ngOnInit() {}

  onOkButton(emailOrName, password) {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loginResult = yield _this.loginService.login(emailOrName, password);
      console.log(_this.loginResult);
      if (_this.loginResult == _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginResult.Success) _this.result.emit("ok");
    })();
  }

  onCancelButton() {
    this.result.emit("cancel");
  }

  onRegisterButton() {
    this.result.emit("register");
  }

  onForgotPasswordLink(eMail) {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.passwordChangeResult = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(_this2.http.get("/account/RestorePassword/" + eMail));
      console.log(_this2.passwordChangeResult);
    })();
  }

  getErrorMessage() {
    switch (this.loginResult) {
      case undefined:
        return null;

      case _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginResult.Success:
        return null;

      case _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginResult.MailNotConfirmed:
        return "User's emial has not been confirmed. Confirm email or try restoring password.";

      case _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginResult.AlreadySignedIn:
        return "Another user allready logined";

      case _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginResult.UserNotFound:
        return "User does not exist";

      case _services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginResult.WrongPassword:
        return "Password is incorrect";

      default:
        return null;
    }
  }

  getPasswordChangeMessage() {
    switch (this.passwordChangeResult) {
      case false:
        return "This user was not found. Enter correct user name or email and try to restore password again.";

      case true:
        return "A link to change password has been sent to your email";

      default:
        return null;
    }
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  outputs: {
    result: "result"
  },
  decls: 33,
  vars: 8,
  consts: [["tabindex", "-1", 1, "modal", 3, "ngStyle"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-danger", 3, "hidden"], [1, "mb-3"], ["titleinput", ""], ["for", "emailInLogin", 1, "form-label"], ["type", "text", "placeholder", "example@mail.com", "aria-label", "Email", "aria-describedby", "basic-addon2", 1, "form-control"], ["nameInput", ""], ["for", "passwordInLogin", 1, "form-label"], ["type", "password", "autocomplete", "current-password", "id", "current-password", "aria-label", "Password", "aria-describedby", "basic-addon2", 1, "form-control"], ["passInput", ""], [1, "text-center"], ["class", "form-label", "style", "display: block", 4, "ngIf"], ["class", "link-primary p-0", 3, "routerLink", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "m-4", 2, "width", "250px", "height", "50px", 3, "click"], [1, "form-label"], [1, "link-primary", "m-3", 3, "routerLink", "click"], [1, "form-label", 2, "display", "block"], [1, "link-primary", "p-0", 3, "routerLink", "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() {
        return ctx.onCancelButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8, 9)(12, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "User name or email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8, 9)(18, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_label_23_Template, 2, 1, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginComponent_a_24_Template, 2, 2, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 16)(26, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);

        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onOkButton(_r1.value, _r3.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16)(29, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Don't have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_31_listener() {
        return ctx.onRegisterButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Sing up");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.getErrorMessage() == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getErrorMessage());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getPasswordChangeMessage() != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordChangeResult == null || ctx.passwordChangeResult == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
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







function RegistrationComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "To complete registration open your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}

function RegistrationComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.onOkButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function RegistrationComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.onCloseButton());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

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
    this.eMail = "";
    this.userName = "";
    this.password = "";
    this.password2 = "";
    this.completed = false;
    this.showPassword = false;
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
        _this.completed = true;
        _this.registrationFailed = false;
      } else {
        _this.registrationFailed = true;
        _this.registrationError = res.errorDescription;
        console.log("Registration failed:" + _this.registrationError);
      }
    })();
  }

  onCloseButton() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Registration success");

      _this2.result.emit("ok");
    })();
  }

  setPasswordVisiblity(value) {
    this.showPassword = value;
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
  decls: 36,
  vars: 14,
  consts: [["tabindex", "-1", 1, "modal", 3, "ngStyle"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-danger", 3, "hidden"], [1, "mb-3"], ["titleinput", ""], ["for", "userInRegister", 1, "form-label"], ["type", "text", "placeholder", "User name", "aria-label", "User name", "aria-describedby", "basic-addon2", "id", "userInRegister", 1, "form-control", 3, "value", "disabled", "input"], ["userInput", ""], ["for", "emailInRegister", 1, "form-label"], ["type", "text", "placeholder", "Email", "aria-label", "Email", "aria-describedby", "basic-addon2", "id", "emailInRegister", 1, "form-control", 3, "value", "disabled", "input"], ["nameInput", ""], ["for", "new-password", 1, "form-label"], ["aria-label", "Password", "aria-describedby", "basic-addon2", "id", "new-password", "autocomplete", "new-password", 1, "form-control", 3, "type", "value", "disabled", "input"], ["passInput", ""], ["type", "checkbox", "id", "password-check", 1, "ms-0", 3, "click"], ["passwordCheckbox", ""], ["for", "password-check", 1, "form-label", "ms-2"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["type", "button", "class", "btn btn-primary", "style", "width: 150px", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success", "style", "width: 150px", 3, "click", 4, "ngIf"], [1, "form-label"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "150px", 3, "click"], ["type", "button", 1, "btn", "btn-success", 2, "width", "150px", 3, "click"]],
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_6_listener() {
        return ctx.onCancelButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 6)(8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8, 9)(12, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "User name");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.userName = _r1.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8, 9)(18, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_20_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.eMail = _r3.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8, 9)(24, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function RegistrationComponent_Template_input_input_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.password = _r5.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegistrationComponent_Template_input_click_28_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);

        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.setPasswordVisiblity(_r6.checked));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Show password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegistrationComponent_div_32_Template, 3, 0, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RegistrationComponent_button_34_Template, 2, 0, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegistrationComponent_button_35_Template, 2, 0, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.registrationFailed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.registrationError);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.completed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.eMail);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.completed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password")("disabled", ctx.completed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.completed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.completed);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.completed);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle],
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
/* harmony import */ var rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/internal/lastValueFrom */ 8611);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../critters/CEditModel */ 7866);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../critters/CrittersView */ 9197);
/* harmony import */ var _component_container_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-container.directive */ 702);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../critters/ZeroTimeController */ 8329);
/* harmony import */ var _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../critters/CEditController/SandBoxCrittersEditController */ 6333);
/* harmony import */ var _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../critters/CEditController/CrittersEditController */ 4659);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../critters/CrittersWorld */ 6237);
/* harmony import */ var _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dto/Serializers/cells-data-serializer */ 687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../critters/critters-canvas/critters-canvas.component */ 4986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../critters/time-control-panel/time-control-panel.component */ 8054);























function SandboxComponent_ng_template_13_Template(rf, ctx) {}

function SandboxComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", title_r7.slot);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](title_r7.name);
  }
}

function SandboxComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const title_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", title_r8.slot);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](title_r8.name);
  }
}

const _c0 = function (a0) {
  return {
    "display": a0
  };
};

class SandboxComponent {
  constructor(http, router, world, zeroTimeController, loginService, ec) {
    this.http = http;
    this.router = router;
    this.world = world;
    this.zeroTimeController = zeroTimeController;
    this.loginService = loginService;
    this.ec = ec; // --------------------------------------------------------------    

    this.savePopup = new SavePopup();
    this.loadPopup = new LoadPopup();
  }

  ngOnInit() {
    this.world.testInit();
    this.zeroTimeController.setThisTimeAsZero();
    this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_8__.WorldCangesType.Loaded]);
    console.log("sandbox ngOnInit()");
  }

  onSaveButton() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((yield _this.loginService.getUserInfo()).signedIn) _this.savePopup.open(_this.http, _this.world);else {
        _this.dialogsHost.showLoginDialog( /*#__PURE__*/function () {
          var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            if (result == "ok") if ((yield _this.loginService.getUserInfo()).signedIn) _this.savePopup.open(_this.http, _this.world);
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }

  onLoadButton() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((yield _this2.loginService.getUserInfo()).signedIn) _this2.loadPopup.open(_this2.http, w => _this2.deserializeWorld(w));else {
        _this2.dialogsHost.showLoginDialog( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            if (result == "ok") if ((yield _this2.loginService.getUserInfo()).signedIn) _this2.loadPopup.open(_this2.http, w => _this2.deserializeWorld(w));
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    })();
  }

  deserializeWorld(data) {
    this.world.clear();
    let ser = new _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_9__.CellsDataSerializer();
    ser.deserializeCells(data, this.world);
    this.zeroTimeController.setThisTimeAsZero();
    this.world.resetModificationFlag();
    this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_8__.WorldCangesType.Loaded]);
  }

  onNext() {
    console.log("onNext");
    this.world.runSerie(1);
    this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_8__.WorldCangesType.Executed]);
  }

  getExitConfirmText() {
    return "There are unsaved changes. Do you really want to leave Sandbox?";
  }

  exitConfirmRequired() {
    return this.world.wasModified();
  }

}

SandboxComponent.ɵfac = function SandboxComponent_Factory(t) {
  return new (t || SandboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_8__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__.ZeroTimeController), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_10__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_7__.CrittersEditController));
};

SandboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: SandboxComponent,
  selectors: [["app-sandbox"]],
  viewQuery: function SandboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_component_container_directive__WEBPACK_IMPORTED_MODULE_3__.ComponentContainerDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.dialogsHost = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_8__.CrittersWorld, {
    provide: _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_7__.CrittersEditController,
    useClass: _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_6__.SandBoxCrittersEditController
  }, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_1__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_2__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_4__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__.ZeroTimeController])],
  decls: 50,
  vars: 12,
  consts: [[2, "background", "black", "height", "100vh", "display", "grid", "grid-template-rows", "max-content auto"], [2, "background", "rgb(48, 59, 68)", "color", "white"], ["routerLink", "/home", 1, "btn", "btn-outline-light", "m-2"], [1, "fas", "fa-home"], [1, "btn", "btn-outline-light", "m-2", 3, "click"], [2, "background-color", "white", "position", "relative", "overflow", "hidden"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"], [2, "position", "fixed"], ["component-container", "", "style", "position: fixed"], ["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["multiple", "", "size", "10", "aria-label", "Select slot to save", 1, "form-select", 2, "overflow-y", "auto", 3, "change"], ["saveTitlesSel", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["titleinput", ""], ["type", "text", "placeholder", "World name", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value", "disabled", "input"], ["nameInput", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["multiple", "", "size", "10", "aria-label", "Select world", 1, "form-select", 2, "overflow-y", "auto", 3, "change"], ["loadTitlesSel", ""], [3, "value"]],
  template: function SandboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, " Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_5_listener() {
        return ctx.onSaveButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_7_listener() {
        return ctx.onLoadButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Load");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "app-critters-canvas")(11, "app-time-control-panel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, SandboxComponent_ng_template_13_Template, 0, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Save world");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 14)(21, "select", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function SandboxComponent_Template_select_change_21_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](22);

        return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.savePopup.onSlotSelect(_r1.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, SandboxComponent_option_23_Template, 2, 2, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 18, 19)(27, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("input", function SandboxComponent_Template_input_input_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](28);

        return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.savePopup.saveName = _r4.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 22)(30, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_30_listener() {
        return ctx.savePopup.onPopupOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_32_listener() {
        return ctx.savePopup.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "div", 11)(37, "div", 12)(38, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Load world");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "div", 14)(41, "select", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function SandboxComponent_Template_select_change_41_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);

        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](42);

        return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.loadPopup.onSlotSelect(_r5.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, SandboxComponent_option_43_Template, 2, 2, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "div", 22)(46, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_46_listener() {
        return ctx.loadPopup.onPopupOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, " Load ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_48_listener() {
        return ctx.loadPopup.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](8, _c0, ctx.savePopup.savePopupDisplayStyle));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.savePopup.titles);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("value", ctx.savePopup.saveName);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.savePopup.selectedSave == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.savePopup.selectedSave == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](10, _c0, ctx.loadPopup.loadPopupDisplayStyle));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.loadPopup.titles);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.loadPopup.selectedLoad == null || ctx.loadPopup.selectedLoad.id == -1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _component_container_directive__WEBPACK_IMPORTED_MODULE_3__.ComponentContainerDirective, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_11__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_12__.TimeControlPanelComponent],
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
    this.selectedSave = null;
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
    var _this3 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("onSavePopupOk");
      _this3.savePopupDisplayStyle = "none"; // save current world to slot        

      _this3.selectedSave.name = _this3.saveName; //this.selectedSave!.data = this.world.Serialize();

      yield _this3.saveWorld(_this3.selectedSave);
      console.log("after save");
    })();
  }

  saveWorld(worldTitle) {
    var _this4 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let s = new _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_9__.CellsDataSerializer();
      let cellsData = s.serializeCells(_this4.world.getCells());
      let result = yield (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_17__.lastValueFrom)(_this4.http.post("/sandboxworlds/savetoslot", {
        slot: worldTitle?.slot,
        newName: worldTitle?.name,
        cellsData: cellsData
      }));
      console.log(result);
      if (result) _this4.world.resetModificationFlag();
    })();
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
    this.selectedLoad = null;
    http.get("/sandboxworlds/titles").subscribe(titles => {
      this.titles = this.toSlotList(titles);
    });
    this.loadPopupDisplayStyle = "block";
  }

  toSlotList(titles) {
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
  }

  close() {
    this.loadPopupDisplayStyle = "none";
  }

  onPopupOk() {
    var _this5 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("onLoadPopupOk");
      _this5.loadPopupDisplayStyle = "none"; // load selected world 

      let loaded = yield (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_17__.lastValueFrom)(_this5.http.get("/sandboxworlds/loadfromslot?slot=" + _this5.selectedLoad?.slot));
      console.log("after load", loaded.cellsData);

      _this5.resultCallback(loaded.cellsData);
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
/* harmony import */ var _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../critters/CEditController/CrittersEditController */ 4659);
/* harmony import */ var _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../critters/CEditController/SandBoxCrittersEditController */ 6333);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../critters/CEditModel */ 7866);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../critters/CrittersView */ 9197);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../critters/CrittersWorld */ 6237);
/* harmony import */ var _component_container_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-container.directive */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../critters/critters-canvas/critters-canvas.component */ 4986);

















function StartpageComponent_label_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.userInfo.name);
  }
}

function StartpageComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StartpageComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function StartpageComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function StartpageComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r6.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}

function StartpageComponent_ng_template_30_Template(rf, ctx) {}

const _c0 = function () {
  return {
    "canvas.background-color": "red"
  };
};

class StartpageComponent {
  constructor(loginService, world, editModel, cView) {
    this.loginService = loginService;
    this.world = world;
    this.editModel = editModel;
    this.cView = cView;
    this.userInfo = {
      name: "",
      signedIn: false,
      admin: false
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loginService.userInfo.subscribe(ui => _this.userInfo = ui);

      console.log(_this.userInfo);

      for (let i = 0; i < 3000; i++) {
        let x = Math.round(Math.random() * 150) + 75;
        let y = Math.round(Math.random() * 35) + 12;
        if (_this.world.getCell(x, y) === undefined) _this.world.addCell(x, y, null);
      }

      _this.editModel.scale = 3;

      let cfg = _this.cView.getPaintConfig();

      cfg.cellFillStyle = "white";
      cfg.paintGrid = false;
      cfg.paintInfo = false;

      _this.cView.setPaintConfig(cfg);

      _this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__.WorldCangesType.Loaded]);

      _this.timer = setInterval(() => {
        _this.world.runSerie(1);

        _this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__.WorldCangesType.Executed]);
      }, 100);
    })();
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    clearInterval(this.timer);
  }

  login() {
    this.dialogsHost.showLoginDialog(() => {});
  }

  logout() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.loginService.logout();
      _this2.userInfo = yield _this2.loginService.getUserInfo();
    })();
  }

}

StartpageComponent.ɵfac = function StartpageComponent_Factory(t) {
  return new (t || StartpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_7__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_critters_CEditModel__WEBPACK_IMPORTED_MODULE_3__.CEditModel), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__.CrittersView));
};

StartpageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: StartpageComponent,
  selectors: [["app-startpage"]],
  viewQuery: function StartpageComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_component_container_directive__WEBPACK_IMPORTED_MODULE_6__.ComponentContainerDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.dialogsHost = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_5__.CrittersWorld, {
    provide: _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_1__.CrittersEditController,
    useClass: _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_2__.SandBoxCrittersEditController
  }, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_3__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_4__.CrittersView])],
  decls: 31,
  vars: 6,
  consts: [[1, "container-fluid", "vh-100", "p-0", 2, "background", "rgb(79, 90, 110)"], [1, "container-fluid", 2, "background-color", "rgb(48, 59, 68)"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "fs-4", 2, "background-color", "rgb(48, 59, 68)", "color", "white"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "justify-content-between", "w-50"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/home", 1, "nav-link", "active"], ["routerLink", "/sandbox", 1, "nav-link"], ["routerLink", "/wiki/article/Contents", 1, "nav-link"], ["routerLink", "/play", 1, "nav-link"], ["class", "text-light me-3 fs-5", 4, "ngIf"], ["class", "btn btn-outline-light my-2 my-sm-0", "type", "submit", 3, "click", 4, "ngIf"], [1, "m-5", 2, "width", "900px", "height", "210px", "display", "block", "position", "relative", "left", "50%", "transform", "translateX(-50%)", 3, "ngStyle"], [3, "canvasColor"], [1, "container-fluid", "p-4", 2, "color", "white"], [2, "position", "fixed"], ["component-container", "", "style", "position: fixed"], [1, "text-light", "me-3", "fs-5"], ["type", "submit", 1, "btn", "btn-outline-light", "my-2", "my-sm-0", 3, "click"], [1, "fas", "fa-sign-out", "me-2"], [1, "fas", "fa-sign-in", "me-2"]],
  template: function StartpageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "nav", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Sandbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "li", 8)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Investigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "li", 8)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Game");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, StartpageComponent_label_20_Template, 2, 1, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, StartpageComponent_button_21_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, StartpageComponent_button_22_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "app-critters-canvas", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " Critters is defined on a two-dimensional infinite grid of cells, which may be identified with the integer lattice. As in Conway's Game of Life, at any point in time each cell may be in one of two states: alive or dead. The Critters rule is a block cellular automaton using the Margolus neighborhood. This means that, at each step, the cells of the automaton are partitioned into 2 \u00D7 2 blocks and each block is updated independently of the other blocks. The center of a block at one time step becomes the corner of four blocks at the next time step, and vice versa; in this way, the four cells in each block belong to four different 2 \u00D7 2 blocks of the previous partition. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " (Wikipedia) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, StartpageComponent_ng_template_30_Template, 0, 0, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.userInfo.signedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.userInfo.signedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.userInfo.signedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("canvasColor", "rgb(79, 90, 110)");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _component_container_directive__WEBPACK_IMPORTED_MODULE_6__.ComponentContainerDirective, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_8__.CrittersCanvasComponent],
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
/* harmony export */   "ArticleModel": () => (/* binding */ ArticleModel),
/* harmony export */   "ArticleStatus": () => (/* binding */ ArticleStatus)
/* harmony export */ });
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../critters/CEditModel */ 7866);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../critters/CrittersWorld */ 6237);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../critters/CrittersView */ 9197);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../critters/ZeroTimeController */ 8329);
/* harmony import */ var _critters_CEditController_ViewOnlyCrittersEditController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../critters/CEditController/ViewOnlyCrittersEditController */ 1393);
/* harmony import */ var _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../critters/CEditController/CrittersEditController */ 4659);
/* harmony import */ var _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dto/Serializers/cells-data-serializer */ 687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../critters/critters-canvas/critters-canvas.component */ 4986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../critters/time-control-panel/time-control-panel.component */ 8054);



















function ArticleComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("routerLink", "/wiki/edit/", ctx_r0.article == null ? null : ctx_r0.article.id, "");
  }
}

function ArticleComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ArticleComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r3.toArchive());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "To archive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function ArticleComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ArticleComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r5.deleteArticle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

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
  constructor(http, route, router, world, zeroTimeController, loginService) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.world = world;
    this.zeroTimeController = zeroTimeController;
    this.loginService = loginService;
    this.article = null;
    this.editAvaible = false;
    this.deleteAvaible = false;
    this.toArchiveAvaible = false;
  }

  cellsFieldIsEmpy() {
    return (this.article?.cellsData?.length ?? 0) == 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.route.params.subscribe(routeParams => {
        console.log("load start");

        _this.http.get("/article/" + routeParams.id).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (article) {
            _this.article = article;

            _this.deserializeWorld(article);

            _this.zeroTimeController.setThisTimeAsZero();

            yield _this.showAccessibleButtons();
            setInterval(() => _this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_2__.WorldCangesType.Loaded]));
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  showAccessibleButtons() {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let userInfo = yield _this2.loginService.getUserInfo();

      if (userInfo != undefined && userInfo.signedIn) {
        // user can edit article when it in draft/rejected status or if user is admin
        _this2.editAvaible = _this2.editAvaible = _this2.article?.authorName == userInfo.name && [ArticleStatus.Draft, ArticleStatus.Regected].includes(_this2.article.status) || userInfo.admin; // user can delete article if he is admin or it is his article

        _this2.deleteAvaible = _this2.article?.authorName == userInfo.name || userInfo.admin; // user can send article to archive if it approved his article or user is a moderator

        _this2.toArchiveAvaible = _this2.article?.authorName == userInfo.name && _this2.article.status == ArticleStatus.Approved || userInfo.admin;
      }
    })();
  }

  deserializeWorld(article) {
    this.world.clear();
    let data = article.cellsData;
    new _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_8__.CellsDataSerializer().deserializeCells(data, this.world);
  }

  deleteArticle() {
    if (window.confirm("A you sure want to delete this article permanently?")) {
      this.http.delete("/article/" + this.article.id).subscribe(() => {
        this.router.navigateByUrl("/wiki/article/contents");
      });
    }
  }

  toArchive() {
    if (window.confirm("A you sure want to move this article to the archive?")) {
      this.http.put("/article/toarchive/" + this.article.id, this.article.id).subscribe(() => {
        this.router.navigateByUrl("/wiki/article/contents");
      });
    }
  }

  contentToHTML(content) {
    return content == undefined ? content : content.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

}

ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
  return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_2__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__.ZeroTimeController), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_9__.LoginService));
};

ArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ArticleComponent,
  selectors: [["app-article"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_2__.CrittersWorld, {
    provide: _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_7__.CrittersEditController,
    useClass: _critters_CEditController_ViewOnlyCrittersEditController__WEBPACK_IMPORTED_MODULE_6__.ViewOnlyCrittersEditController
  }, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_1__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_3__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_4__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__.ZeroTimeController])],
  decls: 14,
  vars: 11,
  consts: [[2, "height", "100%", "display", "grid", "position", "relative", "grid-template-areas", "'area1 area2' 'area1 area2'", "grid-template-columns", "50% 50%", "grid-template-rows", "auto 0%", 3, "ngStyle"], [2, "grid-template-rows", "max-content auto", "color", "black", "position", "relative"], [1, "p-3", 2, "position", "absolute", "top", "0px", "left", "0px", "right", "0px", "bottom", "0px", "overflow-y", "scroll"], [3, "innerHtml"], [2, "position", "absolute", "bottom", "20px", "right", "30px"], ["class", "btn btn-outline-primary me-2", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-outline-primary me-2", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [2, "color", "black", "position", "relative", 3, "ngStyle"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"], [1, "btn", "btn-outline-primary", "me-2", 3, "routerLink"], [1, "fas", "fa-edit", "me-2"], [1, "btn", "btn-outline-primary", "me-2", 3, "click"], [1, "btn", "btn-outline-primary", 3, "click"]],
  template: function ArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ArticleComponent_button_8_Template, 3, 1, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, ArticleComponent_button_9_Template, 3, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ArticleComponent_button_10_Template, 3, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "app-critters-canvas")(13, "app-time-control-panel", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](7, _c0, ctx.cellsFieldIsEmpy() ? "100% 0%" : "50% 50%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.article == null ? null : ctx.article.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHtml", ctx.contentToHTML(ctx.article == null ? null : ctx.article.content), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.editAvaible);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.toArchiveAvaible);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.deleteAvaible);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](9, _c1, ctx.cellsFieldIsEmpy() ? "none" : "block"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_10__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_11__.TimeControlPanelComponent],
  encapsulation: 2
});
class ArticleModel {}
var ArticleStatus;

(function (ArticleStatus) {
  ArticleStatus[ArticleStatus["Draft"] = 1] = "Draft";
  ArticleStatus[ArticleStatus["AwaitingApproval"] = 2] = "AwaitingApproval";
  ArticleStatus[ArticleStatus["Regected"] = 3] = "Regected";
  ArticleStatus[ArticleStatus["Approved"] = 4] = "Approved";
  ArticleStatus[ArticleStatus["Archival"] = 5] = "Archival";
})(ArticleStatus || (ArticleStatus = {}));

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
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article.component */ 7744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function ArticlesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 3)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 6)(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 6, article_r1.editionDate, "YYYY-MM-dd hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getArticleStatusDesc(article_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/wiki/article/", article_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.name ? article_r1.name : "no name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1.shortContent);
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
    getArticleStatusDesc(st) {
        if (st == _article_component__WEBPACK_IMPORTED_MODULE_0__.ArticleStatus.Draft)
            return "(Draft)";
        else if (st == _article_component__WEBPACK_IMPORTED_MODULE_0__.ArticleStatus.Archival)
            return "(In archive)";
        else if (st == _article_component__WEBPACK_IMPORTED_MODULE_0__.ArticleStatus.AwaitingApproval)
            return "(Awaiting moderation)";
        else if (st == _article_component__WEBPACK_IMPORTED_MODULE_0__.ArticleStatus.Regected)
            return "(Adjustment required)";
        else
            return "";
    }
}
ArticlesComponent.ɵfac = function ArticlesComponent_Factory(t) { return new (t || ArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ArticlesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArticlesComponent, selectors: [["app-articles"]], decls: 1, vars: 1, consts: [["class", "p-2", 4, "ngFor", "ngForOf"], [1, "p-2"], [1, "fas", "fa-user"], [2, "display", "inline", "margin-left", "6px"], [1, "text-muted", 2, "display", "inline", "margin-left", "6px"], [1, "link-primary", 3, "routerLink"], [1, "text-muted"]], template: function ArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ArticlesComponent_div_0_Template, 17, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.articles);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], encapsulation: 2 });
class ArticleTitleModel {
}


/***/ }),

/***/ 1767:
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../critters/CrittersWorld */ 6237);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../critters/CEditModel */ 7866);
/* harmony import */ var _critters_CrittersView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../critters/CrittersView */ 9197);
/* harmony import */ var _critters_CTimeController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../critters/CTimeController */ 576);
/* harmony import */ var _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../critters/ZeroTimeController */ 8329);
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article.component */ 7744);
/* harmony import */ var _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../critters/CEditController/SandBoxCrittersEditController */ 6333);
/* harmony import */ var _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../critters/CEditController/CrittersEditController */ 4659);
/* harmony import */ var _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dto/Serializers/cells-data-serializer */ 687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../critters/critters-canvas/critters-canvas.component */ 4986);
/* harmony import */ var _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../critters/time-control-panel/time-control-panel.component */ 8054);




















function EditArticleComponent_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("the maximum name length is 80 (", ctx_r1.nameLength, ")");
  }
}

function EditArticleComponent_label_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("the maximum content length is 10000 (", ctx_r3.contentLength, ")");
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
        this.world.clear();
        new _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_9__.CellsDataSerializer().deserializeCells(article.cellsData, this.world);
        this.zeroTimeController.setThisTimeAsZero();
        setTimeout(() => this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.Loaded]));
      });else {
        this.isNew = true;
        this.article.name = "";
        ;
        this.article.content = "";
        this.world.clear();
        this.world.notifyAboutChanges([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.WorldCangesType.Loaded]);
      }
    });
  }

  onSave(name, text) {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.save(name, text, _article_component__WEBPACK_IMPORTED_MODULE_6__.ArticleStatus.Draft);
    })();
  }

  onPublish(name, text) {
    var _this2 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.save(name, text, _article_component__WEBPACK_IMPORTED_MODULE_6__.ArticleStatus.AwaitingApproval);
    })();
  }

  save(name, text, status) {
    var _this3 = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.article.content = text;
      _this3.article.name = name;
      _this3.article.status = status;
      let cellsData = new _dto_Serializers_cells_data_serializer__WEBPACK_IMPORTED_MODULE_9__.CellsDataSerializer().serializeCells(_this3.world.getCells());
      _this3.article.cellsData = cellsData;

      if (_this3.isNew) {
        let article = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)(yield _this3.http.post("/article", _this3.article));

        if (article) {
          _this3.world.resetModificationFlag();

          _this3.router.navigateByUrl("/wiki/article/" + article.id);
        }
      } else {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)(yield _this3.http.put("/article", _this3.article));

        _this3.world.resetModificationFlag();

        _this3.router.navigateByUrl("/wiki/article/" + _this3.article.id);
      }
    })();
  }

  onDelete() {
    console.log("/article/" + this.article.id);
    this.http.delete("/article/" + this.article.id).subscribe(() => {});
  }

  onReject() {
    console.log("/article/reject/" + this.article.id);
    this.http.put("/article/reject/" + this.article.id, null).subscribe(() => {});
  }

  onApprove() {
    console.log("/article/approve/" + this.article.id);
    this.http.put("/article/approve/" + this.article.id, null).subscribe(() => {});
  }

  exitConfirmRequired() {
    return this.world.wasModified();
  }

  getExitConfirmText() {
    return "There are unsaved changes. Do you really want to leave this article page?";
  }

}

EditArticleComponent.ɵfac = function EditArticleComponent_Factory(t) {
  return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorld), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__.ZeroTimeController));
};

EditArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: EditArticleComponent,
  selectors: [["app-edit-article"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([_critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorld, {
    provide: _critters_CEditController_CrittersEditController__WEBPACK_IMPORTED_MODULE_8__.CrittersEditController,
    useClass: _critters_CEditController_SandBoxCrittersEditController__WEBPACK_IMPORTED_MODULE_7__.SandBoxCrittersEditController
  }, _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel, _critters_CrittersView__WEBPACK_IMPORTED_MODULE_3__.CrittersView, _critters_CTimeController__WEBPACK_IMPORTED_MODULE_4__.CTimeController, _critters_ZeroTimeController__WEBPACK_IMPORTED_MODULE_5__.ZeroTimeController])],
  decls: 29,
  vars: 4,
  consts: [[2, "height", "100%", "display", "grid", "position", "relative", "grid-template-areas", "'area1 area2' 'buttons1 buttons2'", "grid-template-columns", "50% 50%", "grid-template-rows", "auto max-content"], [2, "display", "grid", "grid-template-rows", "max-content auto", "grid-area", "area1", "color", "black", "position", "relative"], [1, "m-2"], [1, "form-label"], ["placeholder", " name of the configuration or principle", 1, "form-control", 3, "value", "input"], ["articleName", ""], ["class", "form-label text-danger", 4, "ngIf"], [1, "m-2", 2, "display", "grid", "grid-template-rows", "max-content auto"], ["placeholder", "description of the configuration or principle you found", 1, "form-control", 3, "value", "input"], ["articleContent", ""], [2, "background", "rgb(255 106 0)", "grid-area", "area2", "color", "white", "position", "relative"], [1, "m-1", 2, "position", "absolute", "right", "30px", "bottom", "30px"], [2, "background", "rgb(240, 240, 240)", "grid-area", "buttons1", "color", "white", "position", "relative"], [1, "btn", "btn-outline-danger", "m-2", 3, "click"], [2, "background", "rgb(240, 240, 240)", "grid-area", "buttons2", "position", "relative"], [1, "btn", "btn-outline-success", "m-2", "float-end", 3, "click"], [1, "form-label", "text-danger"]],
  template: function EditArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Article title");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function EditArticleComponent_Template_input_input_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);

        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.nameLength = _r0 == null ? null : _r0.value == null ? null : _r0.value.length);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, EditArticleComponent_label_7_Template, 2, 1, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 7)(9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Article text");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "textarea", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function EditArticleComponent_Template_textarea_input_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.contentLength = _r2 == null ? null : _r2.value == null ? null : _r2.value.length);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, EditArticleComponent_label_13_Template, 2, 1, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-critters-canvas")(16, "app-time-control-panel", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_18_listener() {
        return ctx.onApprove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Approve");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_20_listener() {
        return ctx.onReject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Reject");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_22_listener() {
        return ctx.onDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 14)(25, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_25_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onPublish(_r0.value, _r2.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Publish");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](6);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](12);

        return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx.onSave(_r0.value, _r2.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Save as draft");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.article ? ctx.article.name : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.nameLength) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0) > 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.article ? ctx.article.content : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.contentLength) !== null && tmp_3_0 !== undefined ? tmp_3_0 : 0) > 10000);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _critters_critters_canvas_critters_canvas_component__WEBPACK_IMPORTED_MODULE_10__.CrittersCanvasComponent, _critters_time_control_panel_time_control_panel_component__WEBPACK_IMPORTED_MODULE_11__.TimeControlPanelComponent],
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
/* harmony import */ var C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _component_container_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-container.directive */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ 4120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);









function WikiComponent_a_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Moderation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function WikiComponent_a_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function WikiComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Drafts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function WikiComponent_ng_template_30_Template(rf, ctx) {}

class WikiComponent {
  constructor(router, loginService) {
    this.router = router;
    this.loginService = loginService;
    this.userInfo = null;
  }

  ngOnInit() {
    this.loginService.userInfo.subscribe(ui => this.userInfo = ui);
  }

  keyPress($event, request) {
    if ($event.code == "Enter") this.onSearch(request);
  }

  onSearch(request) {
    this.router.navigateByUrl("/wiki/articles/q:" + request);
  }

  onCreateArticle() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if ((yield _this.loginService.getUserInfo()).signedIn) _this.navigateToArticleCreation();else {
        _this.dialogsHost.showLoginDialog( /*#__PURE__*/function () {
          var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            if (result == "ok") if ((yield _this.loginService.getUserInfo()).signedIn) _this.navigateToArticleCreation();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    })();
  }

  navigateToArticleCreation() {
    this.router.navigateByUrl("/wiki/edit/new");
  }

}

WikiComponent.ɵfac = function WikiComponent_Factory(t) {
  return new (t || WikiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService));
};

WikiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WikiComponent,
  selectors: [["app-wiki"]],
  viewQuery: function WikiComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_component_container_directive__WEBPACK_IMPORTED_MODULE_1__.ComponentContainerDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dialogsHost = _t.first);
    }
  },
  decls: 31,
  vars: 3,
  consts: [[2, "background", "green", "height", "100vh", "display", "grid", "position", "relative", "grid-template-areas", "'header1 header2' 'menu workArea'", "grid-template-columns", "200px auto", "grid-template-rows", "max-content auto"], [2, "background", "rgb(48, 59, 68)", "grid-area", "header1", "color", "white", "position", "relative"], ["routerLink", "/home", 1, "btn", "btn-outline-light", "m-2"], [1, "fas", "fa-home"], [2, "background", "rgb(48, 59, 68)", "grid-area", "header2", "color", "white", "position", "relative"], [1, "input-group", "mt-2", "float-start", 2, "width", "400px"], ["placeholder", "find an article", "aria-label", "Find", "aria-describedby", "basic-addon2", 1, "form-control", 3, "keyup"], ["searchInput", ""], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-search"], [1, "btn", "btn-success", "m-2", "float-end", 2, "grid-area", "header2", 3, "click"], [2, "background", "rgb(79, 90, 110)", "width", "200px", "grid-area", "menu", "color", "white"], ["routerLink", "article/Contents", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "article/Random", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/All", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/My", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/Moderation", "class", "link-light m-3", "style", "display: block", 4, "ngIf"], ["routerLink", "articles/Archive", "class", "link-light m-3", "style", "display: block", 4, "ngIf"], ["routerLink", "articles/Drafts", "class", "link-light m-3", "style", "display: block", 4, "ngIf"], ["routerLink", "article/About", 1, "link-light", "m-3", 2, "display", "block"], [2, "background", "white", "grid-area", "workArea", "position", "relative"], [2, "position", "fixed"], ["component-container", "", "style", "position: fixed"], ["routerLink", "articles/Moderation", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/Archive", 1, "link-light", "m-3", 2, "display", "block"], ["routerLink", "articles/Drafts", 1, "link-light", "m-3", 2, "display", "block"]],
  template: function WikiComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function WikiComponent_Template_input_keyup_7_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.keyPress($event, _r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WikiComponent_Template_button_click_9_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

        return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSearch(_r0.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WikiComponent_Template_button_click_11_listener() {
        return ctx.onCreateArticle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Create article");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11)(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Contents");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Random article");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "All articles");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "My articles");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, WikiComponent_a_22_Template, 2, 0, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, WikiComponent_a_23_Template, 2, 0, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, WikiComponent_a_24_Template, 2, 0, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "About investigations");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, WikiComponent_ng_template_30_Template, 0, 0, "ng-template", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userInfo == null ? null : ctx.userInfo.admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userInfo == null ? null : ctx.userInfo.admin);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userInfo == null ? null : ctx.userInfo.admin);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _component_container_directive__WEBPACK_IMPORTED_MODULE_1__.ComponentContainerDirective],
  encapsulation: 2
});

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