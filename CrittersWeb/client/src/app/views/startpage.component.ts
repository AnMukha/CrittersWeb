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

    userInfo: UserInfo = { name: "", signedIn: false };

    async ngOnInit() {
        this.userInfo = await this.loginService.getCurrentUserInfo(false);
        console.log(this.userInfo);
    }

    Login() {
        let login = this.dialogsHost.viewContainerRef.createComponent(LoginComponent);
        login.instance.result.subscribe(async evt => {
            this.dialogsHost.viewContainerRef.clear();
            if (evt == 'register') {
                let register = this.dialogsHost.viewContainerRef.createComponent(RegistrationComponent);
                register.instance.result.subscribe(evt => {
                    this.dialogsHost.viewContainerRef.clear();
                });
            }
            this.userInfo = await this.loginService.getCurrentUserInfo(false);
        }
        );        
    }

    async Logout() {
        await this.loginService.Logout();
        this.userInfo = await this.loginService.getCurrentUserInfo(false);
    }

}
