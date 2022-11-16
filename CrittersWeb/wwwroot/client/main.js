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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _views_sandbox_component__WEBPACK_IMPORTED_MODULE_2__.SandboxComponent,
        _views_startpage_component__WEBPACK_IMPORTED_MODULE_3__.StartpageComponent,
        _views_wiki_wiki_component__WEBPACK_IMPORTED_MODULE_4__.WikiComponent,
        _views_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _views_component_container_directive__WEBPACK_IMPORTED_MODULE_6__.ComponentContainerDirective,
        _views_registration_component__WEBPACK_IMPORTED_MODULE_7__.RegistrationComponent,
        _views_wiki_article_component__WEBPACK_IMPORTED_MODULE_8__.ArticleComponent,
        _views_wiki_articles_component__WEBPACK_IMPORTED_MODULE_9__.ArticlesComponent,
        _views_wiki_edit_component__WEBPACK_IMPORTED_MODULE_10__.EditArticleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule] }); })();


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
/* harmony import */ var rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/lastValueFrom */ 8611);
/* harmony import */ var _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../critters/CEditController */ 145);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../critters/CEditModel */ 4882);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../critters/CrittersWorld */ 4931);
/* harmony import */ var _critters_CView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../critters/CView */ 648);
/* harmony import */ var _component_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-container.directive */ 702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);













function SandboxComponent_ng_template_13_Template(rf, ctx) {}

function SandboxComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const title_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", title_r7.slot);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](title_r7.name);
  }
}

function SandboxComponent_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const title_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", title_r8.slot);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](title_r8.name);
  }
}

const _c0 = function (a0) {
  return {
    "display": a0
  };
};

class SandboxComponent {
  constructor(http, router) {
    this.http = http;
    this.router = router; // --------------------------------------------------------------

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

    this.view.Repaint();
  }

  ngOnInit() {
    let canvas = document.getElementById("c_canvas");
    this.world = new _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld();
    this.world.TestInit();
    this.editModel = new _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel();
    this.view = new _critters_CView__WEBPACK_IMPORTED_MODULE_4__.CView(canvas, this.world, this.editModel);
    this.editController = new _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__.CEditController(canvas, this.world, this.editModel, () => this.view.Repaint());
    this.view.Repaint();
  }

  onNext() {
    console.log("onNext");
    this.world.RunSerie(1);
    this.view.Repaint();
  }

}

SandboxComponent.ɵfac = function SandboxComponent_Factory(t) {
  return new (t || SandboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};

SandboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: SandboxComponent,
  selectors: [["app-sandbox"]],
  viewQuery: function SandboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_component_container_directive__WEBPACK_IMPORTED_MODULE_5__.ComponentContainerDirective, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dialogsHost = _t.first);
    }
  },
  decls: 50,
  vars: 9,
  consts: [[2, "background", "black", "height", "100vh", "display", "grid", "grid-template-rows", "max-content auto"], [2, "background-color", "#e3f2fd"], ["routerLink", "/home", 1, "btn", "btn-outline-primary", "m-1"], [1, "btn", "btn-outline-primary", "m-1", 3, "click"], [2, "background-color", "white", "position", "relative", "overflow", "hidden"], ["id", "c_canvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", "height", "100%", "background-color", "white"], [1, "btn", "btn-outline-primary", "m-1", 2, "position", "absolute", "left", "30px", "bottom", "30px", 3, "click"], [2, "position", "fixed"], ["component-container", "", "style", "position: fixed"], ["tabindex", "-1", "role", "dialog", 1, "modal", 3, "ngStyle"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["multiple", "", "size", "10", "aria-label", "Select slot to save", 1, "form-select", 2, "overflow-y", "auto", 3, "change"], ["saveTitlesSel", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group", "mb-3"], ["titleinput", ""], ["type", "text", "placeholder", "World name", "aria-label", "Recipient's username", "aria-describedby", "basic-addon2", 1, "form-control", 3, "value", "input"], ["nameInput", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["multiple", "", "size", "10", "aria-label", "Select world", 1, "form-select", 2, "overflow-y", "auto", 3, "change"], ["loadTitlesSel", ""], [3, "value"]],
  template: function SandboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_4_listener() {
        return ctx.onSaveButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_6_listener() {
        return ctx.onLoadButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Load");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "canvas", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_10_listener() {
        return ctx.onNext();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Step");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SandboxComponent_ng_template_13_Template, 0, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Save world");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14)(21, "select", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function SandboxComponent_Template_select_change_21_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);

        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.savePopup.onSlotSelect(_r1.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SandboxComponent_option_23_Template, 2, 2, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 18, 19)(27, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function SandboxComponent_Template_input_input_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](28);

        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.savePopup.saveName = _r4.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 22)(30, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_30_listener() {
        return ctx.savePopup.onPopupOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Save ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_32_listener() {
        return ctx.savePopup.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Cancel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "div", 11)(37, "div", 12)(38, "h4", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Load world");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 14)(41, "select", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function SandboxComponent_Template_select_change_41_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](42);

        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.loadPopup.onSlotSelect(_r5.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, SandboxComponent_option_43_Template, 2, 2, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 22)(46, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_46_listener() {
        return ctx.loadPopup.onPopupOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, " Load ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SandboxComponent_Template_button_click_48_listener() {
        return ctx.loadPopup.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, ctx.savePopup.savePopupDisplayStyle));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.savePopup.titles);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", ctx.savePopup.saveName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx.loadPopup.loadPopupDisplayStyle));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.loadPopup.titles);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _component_container_directive__WEBPACK_IMPORTED_MODULE_5__.ComponentContainerDirective],
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
    return (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_10__.lastValueFrom)(this.http.post("/sandboxworlds/savetoslot", {
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

      let loaded = yield (0,rxjs_internal_lastValueFrom__WEBPACK_IMPORTED_MODULE_10__.lastValueFrom)(_this2.http.get("/sandboxworlds/loadfromslot?slot=" + _this2.selectedLoad?.slot));
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
/* harmony import */ var _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../critters/CEditController */ 145);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../critters/CEditModel */ 4882);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../critters/CrittersWorld */ 4931);
/* harmony import */ var _critters_CView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../critters/CView */ 648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);










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
  constructor(http, route) {
    this.http = http;
    this.route = route;
    this.article = null;
  }

  CellsFieldIsEmpy() {
    return (this.article?.cellsData?.length ?? 0) == 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let canvas = document.getElementById("article_view_canvas");
      _this.world = new _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_3__.CrittersWorld();
      _this.editModel = new _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel();
      _this.view = new _critters_CView__WEBPACK_IMPORTED_MODULE_4__.CView(canvas, _this.world, _this.editModel);
      _this.editController = new _critters_CEditController__WEBPACK_IMPORTED_MODULE_1__.CEditController(canvas, _this.world, _this.editModel, () => _this.view.Repaint());

      _this.view.Repaint();

      _this.route.params.subscribe(routeParams => {
        console.log("load start");

        _this.http.get("/article/" + routeParams.id).subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_A_Mukha_source_repos_AnMukha_CrittersWeb_CrittersWeb_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (article) {
            console.log("Loaded");
            _this.article = article;

            _this.world.Clear();

            let data = article.cellsData;

            for (let i = 0; i < data.length; i = i + 2) _this.world.AddCell(data[i], data[i + 1]);

            setInterval(() => _this.view.Repaint(), 0);
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
  return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
};

ArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ArticleComponent,
  selectors: [["app-article"]],
  decls: 14,
  vars: 9,
  consts: [[2, "height", "100%", "display", "grid", "position", "relative", "grid-template-areas", "'area1 area2' 'area1 area2'", "grid-template-columns", "50% 50%", "grid-template-rows", "auto 0%", 3, "ngStyle"], [2, "grid-template-rows", "max-content auto", "color", "black", "position", "relative"], [1, "p-3", 2, "position", "absolute", "top", "0px", "left", "0px", "right", "0px", "bottom", "0px", "overflow-y", "scroll"], [3, "innerHtml"], [1, "btn", "btn-primary", 2, "position", "absolute", "bottom", "20px", "right", "30px", 3, "routerLink"], [1, "fas", "fa-edit"], [2, "color", "black", "position", "relative", 3, "ngStyle"], ["id", "article_view_canvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", "background-color", "white"], [1, "btn", "btn-outline-primary", "m-1", 2, "position", "absolute", "left", "30px", "bottom", "30px"]],
  template: function ArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Edit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "canvas", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Step");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx.CellsFieldIsEmpy() ? "100% 0%" : "50% 50%"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.article == null ? null : ctx.article.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", ctx.ContentToHTML(ctx.article == null ? null : ctx.article.content), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/wiki/edit/", ctx.article == null ? null : ctx.article.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c1, ctx.CellsFieldIsEmpy() ? "none" : "block"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../critters/CrittersWorld */ 4931);
/* harmony import */ var _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../critters/CEditModel */ 4882);
/* harmony import */ var _critters_CView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../critters/CView */ 648);
/* harmony import */ var _critters_CEditController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../critters/CEditController */ 145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);










class EditArticleComponent {
  constructor(http, route, router, location) {
    this.http = http;
    this.route = route;
    this.router = router;
    this.location = location;
    this.article = new ArticleModel();
    this.isNew = false;
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      let canvas = document.getElementById("edit_article_canvas");
      this.world = new _critters_CrittersWorld__WEBPACK_IMPORTED_MODULE_1__.CrittersWorld();
      this.editModel = new _critters_CEditModel__WEBPACK_IMPORTED_MODULE_2__.CEditModel();
      this.view = new _critters_CView__WEBPACK_IMPORTED_MODULE_3__.CView(canvas, this.world, this.editModel);
      this.editController = new _critters_CEditController__WEBPACK_IMPORTED_MODULE_4__.CEditController(canvas, this.world, this.editModel, () => this.view.Repaint());
      this.view.Repaint();
      console.log(routeParams);
      if (routeParams.id != 'new') this.http.get("/article/" + routeParams.id).subscribe(article => {
        this.article = article;
        this.world.Clear();
        let data = article.cellsData;

        for (let i = 0; i < data.length; i = i + 2) this.world.AddCell(data[i], data[i + 1]);

        this.view.Repaint();
      });else {
        this.isNew = true;
        this.world.Clear();
        this.view.Repaint();
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
        let newArticle = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(yield _this.http.post("/article/new", _this.article));
        if (newArticle) _this.router.navigateByUrl("/wiki/article/" + newArticle.id);
      } else {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)(yield _this.http.put("/article/update", _this.article));

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
  return new (t || EditArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location));
};

EditArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EditArticleComponent,
  selectors: [["app-edit-article"]],
  decls: 28,
  vars: 2,
  consts: [[2, "height", "100%", "display", "grid", "position", "relative", "grid-template-areas", "'area1 area2' 'buttons1 buttons2'", "grid-template-columns", "50% 50%", "grid-template-rows", "auto max-content"], [2, "display", "grid", "grid-template-rows", "max-content auto", "grid-area", "area1", "color", "black", "position", "relative"], [1, "m-2"], [1, "form-label"], [1, "form-control", 3, "value"], ["articleName", ""], [1, "m-2", 2, "display", "grid", "grid-template-rows", "max-content auto"], ["articleContent", ""], [2, "background", "rgb(255 106 0)", "grid-area", "area2", "color", "white", "position", "relative"], ["id", "edit_article_canvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%", "background-color", "white"], [1, "btn", "btn-outline-primary", "m-1", 2, "position", "absolute", "left", "30px", "bottom", "30px"], [2, "background", "rgb(240, 240, 240)", "grid-area", "buttons1", "color", "white", "position", "relative"], [1, "btn", "btn-outline-danger", "m-2", 3, "click"], [2, "background", "rgb(240, 240, 240)", "grid-area", "buttons2", "position", "relative"], [1, "btn", "btn-outline-success", "m-2", "float-end", 3, "click"]],
  template: function EditArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Article title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Article text");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "textarea", 4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "canvas", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Step");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11)(17, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_17_listener() {
        return ctx.OnApprove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Approve");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_19_listener() {
        return ctx.OnReject();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Reject");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_21_listener() {
        return ctx.OnDelete();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 13)(24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_24_listener() {
        return ctx.OnPublish();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Publish");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EditArticleComponent_Template_button_click_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);

        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.OnSave(_r0.value, _r1.value));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Save as draft");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.article ? ctx.article.name : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.article ? ctx.article.content : "");
    }
  },
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

/***/ 145:
/*!*****************************************!*\
  !*** ./src/critters/CEditController.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditController": () => (/* binding */ CEditController)
/* harmony export */ });
class CEditController {
    constructor(canvas, cWorld, editModel, repaint) {
        this.canvas = canvas;
        this.cWorld = cWorld;
        this.editModel = editModel;
        this.repaint = repaint;
        this.AddEventsToCanvas();
    }
    AddEventsToCanvas() {
        this.canvas.addEventListener("mousedown", (e) => this.MouseDownHandler(e));
    }
    MouseDownHandler(event) {
        console.log("on mouse down", event.offsetX, event.offsetY, Math.floor(this.editModel.ScrXToCell(event.offsetX)), Math.floor(this.editModel.ScrYToCell(event.offsetY)));
        let x = Math.floor(this.editModel.ScrXToCell(event.offsetX));
        let y = Math.floor(this.editModel.ScrYToCell(event.offsetY));
        if (this.cWorld.GetCell(x, y) === undefined)
            this.cWorld.AddCell(x, y);
        else
            this.cWorld.ClearCell(x, y);
        this.repaint();
    }
}


/***/ }),

/***/ 4882:
/*!************************************!*\
  !*** ./src/critters/CEditModel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CEditModel": () => (/* binding */ CEditModel)
/* harmony export */ });
class CEditModel {
    constructor() {
        this.scale = 10;
        this.X = 0;
        this.Y = 0;
        this.gridActual = false;
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
}


/***/ }),

/***/ 648:
/*!*******************************!*\
  !*** ./src/critters/CView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CView": () => (/* binding */ CView)
/* harmony export */ });
class CView {
    constructor(canvas, world, editModel) {
        this.canvas = canvas;
        this.world = world;
        this.editModel = editModel;
    }
    Repaint() {
        let ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;
        this.PaintGrid(ctx);
        ctx.fillStyle = "green";
        for (let c_e of this.world.cells.entries()) {
            let c = c_e[1];
            let x = this.editModel.CellXToScr(c.x);
            let y = this.editModel.CellYToScr(c.y);
            if (x < this.canvas.width && x > 0 - this.editModel.scale
                && y > 0 - this.editModel.scale && y < this.canvas.height) {
                ctx.fillRect(x, y, this.editModel.scale, this.editModel.scale);
            }
        }
    }
    PaintGrid(ctx) {
        let x0 = this.editModel.ScrXToCell(0) - 1;
        let x1 = this.editModel.ScrXToCell(ctx.canvas.width) + 1;
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
        let y0 = this.editModel.ScrYToCell(0) - 1;
        let y1 = this.editModel.ScrYToCell(ctx.canvas.height) + 1;
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
// на входе получает провайдер canvas, мир, модель отображения, модель редактирования;
// по команде извне рисует на канвасе мир, согласно модели отображения и добавляет модель редактирования;
// остальную логику выполняют контроллеры


/***/ }),

/***/ 4931:
/*!***************************************!*\
  !*** ./src/critters/CrittersWorld.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CPoint": () => (/* binding */ CPoint),
/* harmony export */   "CRect": () => (/* binding */ CRect),
/* harmony export */   "Cell": () => (/* binding */ Cell),
/* harmony export */   "CrittersWorld": () => (/* binding */ CrittersWorld),
/* harmony export */   "CrittersWorldSerializer": () => (/* binding */ CrittersWorldSerializer)
/* harmony export */ });
class CrittersWorld {
    constructor() {
        this.cells = new Map();
        this.AddAxisX = 0;
        this.AddAxisY = 0;
        this.nextCellKey = 0;
        this.stepNum = 0;
    }
    AddCell(x, y) {
        let key = x * 1000000000 + y;
        let resultCell = new Cell(this.NextCellKey(), x, y, this.stepNum);
        this.cells.set(key, resultCell);
        return resultCell;
    }
    NextCellKey() {
        this.nextCellKey++;
        return this.nextCellKey;
    }
    // Очистить клетку, если занята        
    ClearCell(x, y) {
        let key = x * 1000000000 + y;
        let c = this.cells.get(key);
        if (c)
            this.RemoveCell(key, c);
    }
    RemoveCell(key, cl) {
        this.cells.delete(key);
    }
    SetAdditionalAxis(xA, yA) {
        this.AddAxisX = xA;
        this.AddAxisY = yA;
    }
    IsEvenStep() {
        return this.stepNum % 2 == 0;
    }
    EvenState() {
        return this.stepNum % 2 == 0;
    }
    RunSerie(stepCnt) {
        for (let i = 0; i < stepCnt; i++)
            this.Run();
    }
    Clear() {
        this.cells.clear();
        this.nextCellKey = 0;
        this.stepNum = 0;
    }
    ReverseTimeDirection() {
        this.stepNum++;
    }
    Run() {
        this.stepNum++;
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
                gc00 = this.cells.get(xgc * 1000000000 + ygc);
                c00 = gc00 != undefined;
                gc11 = this.cells.get((xgc + 1) * 1000000000 + (ygc + 1));
                c11 = gc11 != undefined;
                gc01 = this.cells.get(xgc * 1000000000 + (ygc + 1));
                c01 = gc01 != undefined;
                gc10 = this.cells.get((xgc + 1) * 1000000000 + ygc);
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
            cellsNew.set(c.x * 1000000000 + c.y, c);
        }
        this.cells = cellsNew;
    }
    GetCellsCount() {
        return this.cells.size;
    }
    GetCell(x, y) {
        return this.cells.get(x * 1000000000 + y);
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
    TestInit() {
        this.AddCell(10, 10);
        this.AddCell(11, 11);
        this.AddCell(10, 11);
        this.AddCell(12, 11);
    }
}
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
        return this.x * 1000000000 + this.y;
    }
    MoveTo(toX, toY) {
        this.x = toX;
        this.y = toY;
    }
}
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