import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

    constructor(private http: HttpClient, private loginService: LoginService) { }

    @Output() result = new EventEmitter<string>();

    loginFailed: boolean = false;

    ngOnInit(): void {
    }    

    async onOkButton(emailOrName: string, password: string) {
        var res = await this.loginService.login(emailOrName, password);        
        console.log(res);
        if (res)
            this.result.emit("ok");
        else {
            this.loginFailed = true;
            console.log("Login was not successful");
        }
    }

    onCancelButton() {
        this.result.emit("cancel");
    }

    onRegisterButton() {
        this.result.emit("register");
    }

}


