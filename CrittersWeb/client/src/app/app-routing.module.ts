import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login.component';
import { SandboxComponent } from './views/sandbox.component';
import { StartpageComponent } from './views/startpage.component';
import { WikiComponent } from './views/wiki.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: StartpageComponent },
    { path: "sandbox", component: SandboxComponent },
    { path: "wiki", component: WikiComponent },
    { path: "login", component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
