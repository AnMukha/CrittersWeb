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
import { EditArticleComponent } from './views/wiki/edit.component';
import { CrittersCanvasComponent } from './critters/critters-canvas/critters-canvas.component';
import { TimeControlPanelComponent } from './critters/time-control-panel/time-control-panel.component';
import { GameStartComponent } from './views/gameStart/game-start.component';
import { GamePlayComponent } from './views/gameScreen/game-play-component';

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
    ArticlesComponent,
    EditArticleComponent,
    CrittersCanvasComponent,
    TimeControlPanelComponent,
    GameStartComponent,
    GamePlayComponent
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
