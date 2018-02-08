import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constant } from '../utils/constant';
@Injectable()
export class ActuatorService {

    constructor(private http: HttpClient) {

    }

    public getAllActuator(mac: string) {
        let params = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/actuator/all', { params: params });
    }

    public changeActuatorStatus(id, newStatus: string, mac: string, idonboard: string){
        let body = {
            id: id,
            mac: mac,
            status: newStatus,
            idonboard: idonboard
        }
        return this.http.put(Constant.HOST + '/actuator/status', body);
    }

}