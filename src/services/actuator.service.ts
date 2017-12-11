import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constant } from './constant.service';
@Injectable()
export class ActuatorService {

    constructor(private http: HttpClient, private constant: Constant) {

    }

    public getAllActuator(mac: string) {
        let params = new HttpParams().set('mac', mac);
        return this.http.get(this.constant.HOST + '/actuator/all', { params: params });
    }

    public changeActuatorStatus(id, newStatus: string, mac: string, idonboard: string){
        let body = {
            id: id,
            mac: mac,
            status: newStatus,
            idonboard: idonboard
        }
        return this.http.put(this.constant.HOST + '/actuator/status', body);
    }

}