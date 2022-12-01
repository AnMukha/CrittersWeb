import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private http: HttpClient) {
        this.getUserInfo().then((ui) => this.userInfo.next(ui));
    }

    public readonly userInfo: BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>({ name: "", signedIn: false, admin: false });    

    public async getUserInfo(): Promise<UserInfo> {
        return await lastValueFrom(this.http.get<UserInfo>("/account/userinfo"));
    }

    async logout() {
        var success = await lastValueFrom(this.http.get("/account/logout"));
        if (success)
            this.userInfo.next({ name: "", signedIn: false, admin: false });
    }    

    async login(emailOrName: string, password: string): Promise<boolean> {
        let isEmail = emailOrName.indexOf('@') != -1;
        if (await lastValueFrom(this.http.post<boolean>("/account/Login", { UserName: isEmail ? null : emailOrName, Mail: isEmail ? emailOrName : null, password: password }))) {
            let userInfo = await lastValueFrom(this.http.get<UserInfo>("/account/userinfo"));
            this.userInfo.next(userInfo);
            return true;
        }
        else return false;
    }

}

export class UserInfo {
    name!: string;
    signedIn!: boolean;
    admin!: boolean;
}
