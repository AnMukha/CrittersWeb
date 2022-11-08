import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login.component';
import { SandboxComponent } from './views/sandbox.component';
import { StartpageComponent } from './views/startpage.component';
import { ArticleComponent } from './views/wiki/article.component';
import { ArticlesComponent } from './views/wiki/articles.component';
import { WikiComponent } from './views/wiki/wiki.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: StartpageComponent },
    { path: "sandbox", component: SandboxComponent },
    {
        path: "wiki", component: WikiComponent,
        children: [
            {
                path: 'article/:name',
                component: ArticleComponent,                
            },
            {
                path: 'articles/:request',
                component: ArticlesComponent
            },
        ],
    },
    { path: "login", component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
