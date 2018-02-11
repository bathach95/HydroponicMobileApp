import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';

@Injectable()
export class RegisterService {

    constructor(private http: HttpClient) {}

    public register(user: any): Observable<any> {
        return this.http.post(Constant.HOST + '/user/register', user);
    }

}