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
    eMail!: string;
    password!: string;
    password2!: string;

    ngOnInit(): void {
    }

    async onOkButton() {
        let res = await lastValueFrom(this.http.post("/account/Register", { Mail: this.eMail, Password: this.password })) as any;
        console.log(res);
        if (res.Success)
            this.result.emit("ok");
        else {
            this.registrationFailed = true;
            this.registrationError = res.errorDescription;
            console.log("Registration failed:" + this.registrationError);
        }        
    }

    onCancelButton() {
        this.result.emit("cancel");
    }

}
