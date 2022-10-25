import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SandboxComponent } from './views/sandbox.component';
import { StartpageComponent } from './views/startpage.component';
import { WikiComponent } from './views/wiki.component';
const routes = [
    { path: '', redirectTo: 'home' },
    { path: "home", component: StartpageComponent },
    { path: "sandbox", component: SandboxComponent },
    { path: "wiki", component: WikiComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map