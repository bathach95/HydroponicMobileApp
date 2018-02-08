import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constant } from '../utils/constant';
@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    public login(user: any): Observable<any> {
        return this.http.post(Constant.HOST + '/user/login', user);
    }

    public logout() {
        localStorage.removeItem('token');
    }

}