import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private http: HttpClient) {        
    }

    userInfo: UserInfo | undefined = undefined;


    async Logout() {
        var success = await lastValueFrom(this.http.get("/account/logout"));
        if (success)
            this.userInfo = { name: "", signedIn: false };
    }    

    async getCurrentUserInfo(cacheEnable: boolean): Promise<UserInfo> {
        if (!this.userInfo === undefined || !cacheEnable)
            this.userInfo = await lastValueFrom(this.http.get<UserInfo>("/account/userinfo"));        
        return this.userInfo!;
    }    

}

export class UserInfo {
    name!: string;
    signedIn!: boolean;
}
