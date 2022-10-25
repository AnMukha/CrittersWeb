import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SandboxComponent } from './views/sandbox.component';
import { StartpageComponent } from './views/startpage.component';
import { WikiComponent } from './views/wiki.component';
import { LoginComponent } from './views/login.component';
import { ComponentContainerDirective } from './views/component-container.directive';
import { RegistrationComponent } from './views/registration.component';

@NgModule({
  declarations: [
    AppComponent,    
    SandboxComponent,
    StartpageComponent,
    WikiComponent,
    LoginComponent,
    ComponentContainerDirective,
    RegistrationComponent
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
