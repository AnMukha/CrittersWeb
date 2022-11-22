import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login.component';
import { SandboxComponent } from './views/sandbox.component';
import { StartpageComponent } from './views/startpage.component';
import { ArticleComponent } from './views/wiki/article.component';
import { ArticlesComponent } from './views/wiki/articles.component';
import { EditArticleComponent } from './views/wiki/edit.component';
import { WikiComponent } from './views/wiki/wiki.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: StartpageComponent },
    {
        path: "sandbox",
        component: SandboxComponent,
        canDeactivate: [(sandBox: SandboxComponent) =>        
            sandBox.exitConfirmRequired() ? window.confirm(sandBox.getExitConfirmText()): true
        ]
    },
    {
        path: "wiki", component: WikiComponent, 
        children: [
            {
                path: 'article/:id',
                component: ArticleComponent,
            },
            {
                path: 'edit/:id',
                component: EditArticleComponent,
                canDeactivate: [(editArt: EditArticleComponent) =>
                    editArt.exitConfirmRequired() ? window.confirm(editArt.getExitConfirmText()) : true]
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
