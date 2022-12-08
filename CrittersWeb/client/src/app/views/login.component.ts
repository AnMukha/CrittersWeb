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

    loginResult: LoginResult | undefined = undefined;
    passwordChangeResult: boolean | null = null;

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

    async onForgotPasswordLink(eMail: string) {
        this.passwordChangeResult = await lastValueFrom(this.http.get<boolean>("/account/RestorePassword/" + eMail));
        console.log(this.passwordChangeResult);
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
            case LoginResult.WrongPassword:
                return "Password is incorrect";
            default: return null;
        }
    }

    getPasswordChangeMessage(): string | null {
        switch (this.passwordChangeResult) {
            case false:
                return "This user was not found. Enter correct user name or email and try to restore password again.";
            case true:
                return "A link to change password has been sent to your email";
            default:
                return null;
        }                 
    }



}


