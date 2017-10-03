import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor(private http: Http, private storage: Storage) {

    }

    public login(user: any): Observable<any> {
        return this.http.post('http://192.168.1.106:3210/user/login', user).map((res: Response) => {
            return res.json();
        });
    }

    public logout() {
        return this.storage.remove('token');
    }

}