import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponent } from './views/sandbox.component';
import { StartpageComponent } from './views/startpage.component';
import { WikiComponent } from './views/wiki/wiki.component';
import { LoginComponent } from './views/login.component';
import { ComponentContainerDirective } from './views/component-container.directive';
import { RegistrationComponent } from './views/registration.component';
import { ArticleComponent } from './views/wiki/article.component';
import { ArticlesComponent } from './views/wiki/articles.component';

@NgModule({
  declarations: [
    AppComponent,    
    SandboxComponent,
    StartpageComponent,
    WikiComponent,
    LoginComponent,
    ComponentContainerDirective,
    RegistrationComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
