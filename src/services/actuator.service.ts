import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ActuatorService {

    constructor(private http: HttpClient) {

    }

    public getAllActuator(mac: string){
        let params = new HttpParams().set('mac', mac);
        return this.http.get('http://192.168.1.106:3210/actuator/all', {params: params});
    }

}