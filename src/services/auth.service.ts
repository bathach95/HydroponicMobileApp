import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    public login(user: any): Observable<any> {
        return this.http.post('http://192.168.1.106:3210/user/login', user);
    }

    public logout() {
        localStorage.removeItem('token');
    }

}