import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { LoginResult, LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

    constructor(private http: HttpClient, private loginService: LoginService) { }

    @Output() result = new EventEmitter<string>();

    loginResult: LoginResult| undefined = undefined;

    ngOnInit(): void {
    }    

    async onOkButton(emailOrName: string, password: string) {
        this.loginResult = await this.loginService.login(emailOrName, password);
        console.log(this.loginResult);
        if (this.loginResult == LoginResult.Success)
            this.result.emit("ok");
    }

    onCancelButton() {
        this.result.emit("cancel");
    }

    onRegisterButton() {
        this.result.emit("register");
    }

    getErrorMessage(): string | null {
        switch (this.loginResult) {
            case undefined:
                return null;
            case LoginResult.Success:
                return null;
            case LoginResult.MailNotConfirmed:
                return "User's emial has not been confirmed. Confirm email or try restoring password.";
            case LoginResult.AlreadySignedIn:
                return "Another user allready logined";
            case LoginResult.UserNotFound:
                return "User does not exist";
            default: return null;
        }
    }



}


