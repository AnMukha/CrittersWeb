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

    @Output() result = new EventEmitter<String>();

    eMail!: string;
    password!: string;
    loginFailed: boolean = false;

    ngOnInit(): void {
    }    

    async onOkButton() {
        let res = await lastValueFrom(this.http.post("/account/Login", { Mail: this.eMail, Password: this.password }));
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


