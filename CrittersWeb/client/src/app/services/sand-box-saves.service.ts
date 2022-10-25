import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SandBoxSavesService {

    constructor(private http: HttpClient) { }

    getTitles() {
        return this.http.get("/api/sanboxnames");
    }    

}
