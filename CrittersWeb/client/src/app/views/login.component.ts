import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
    
    constructor(private http: HttpClient) { }

    @Output() result = new EventEmitter<string>();

    loginFailed: boolean = false;

    ngOnInit(): void {
    }    

    async onOkButton(emailOrName: string, password: string) {        
        let isEmail = emailOrName.indexOf('@') != -1;
        let res = await lastValueFrom(this.http.post("/account/Login", { UserName: isEmail ? null : emailOrName, Mail: isEmail ? emailOrName: null, Password: password }));
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


