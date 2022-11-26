import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService, UserInfo } from '../services/login.service';
import { ComponentContainerDirective } from './component-container.directive';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@Component({
  selector: 'app-startpage',
    templateUrl: "startpage.component.html",
  styles: [
  ]
})
export class StartpageComponent implements OnInit {

    constructor(private loginService: LoginService) { }

  @ViewChild(ComponentContainerDirective, { static: true }) dialogsHost!: ComponentContainerDirective;

    userInfo: UserInfo = { name: "", signedIn: false, admin: false };

    async ngOnInit() {
        this.loginService.userInfo.subscribe((ui) => this.userInfo = ui);
        console.log(this.userInfo);
    }

    Login() {
        this.dialogsHost.showLoginDialog(() => { });
    }

    async Logout() {
        await this.loginService.Logout();
        this.userInfo = await this.loginService.getUserInfo();
    }

}
