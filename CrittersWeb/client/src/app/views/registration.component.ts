import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: 'registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

    constructor(private http: HttpClient) {}

    @Output() result = new EventEmitter<String>();    

    registrationFailed: boolean = false;
    registrationError: string = "";
    eMail: string = "";
    userName: string = "";
    password: string ="";
    password2: string = "";
    completed: boolean = false;    
    showPassword: boolean = false;

    ngOnInit(): void {
    }

    async onOkButton() {
        let res = await lastValueFrom(this.http.post("/account/Register", { Mail: this.eMail, Password: this.password, UserName: this.userName })) as any;
        console.log(res);
        if (res.success) {
            this.completed = true;
            this.registrationFailed = false;
        }
        else {
            this.registrationFailed = true;
            this.registrationError = res.errorDescription;
            console.log("Registration failed:" + this.registrationError);
        }        
    }

    async onCloseButton() {
        console.log("Registration success");
        this.result.emit("ok");
    }

    setPasswordVisiblity(value: any) {
        this.showPassword = value;
    }

    onCancelButton() {
        this.result.emit("cancel");
    }

}
