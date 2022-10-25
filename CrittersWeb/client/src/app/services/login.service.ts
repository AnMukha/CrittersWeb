import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
    async Logout() {
        return lastValueFrom(this.http.get("/account/logout"));
    }

    constructor(private http: HttpClient) { }

    async getCurrentUserInfo(): Promise<UserInfo> {
        return lastValueFrom(this.http.get<UserInfo>("/account/userinfo"));
    }    

}

export class UserInfo {
    email!: string;
    signedIn!: boolean;
}
