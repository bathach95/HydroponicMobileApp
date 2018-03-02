import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Constant } from '../utils/constant';
import * as _ from 'lodash';

@Injectable()
export class ActuatorService {

    constructor(private http: HttpClient) { }

    public getAllActuator(mac: string): Observable<any> {
        let params = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/actuator/all', { params: params });
    }

    public changeActuatorStatus(id: any, newStatus: string, mac: string, idonboard: string): Observable<any> {
        let body = {
            id: id,
            mac: mac,
            status: newStatus,
            idonboard: idonboard
        }
        return this.http.put(Constant.HOST + '/actuator/status', body);
    }

    public addActuator(newActuator: any): Observable<any> {
        return this.http.post(Constant.HOST + '/actuator/addactuator', newActuator);
    }

    public getAvailableActuator(mac: string) {

        return new Promise((resolve, reject) => {
            this.getAllActuator(mac).subscribe((res: any) => {
                let currentActuatorList = res.data;

                let actuatorTypes = Constant.ACTUATOR_TYPE;
                let result = [];

                actuatorTypes.forEach(function (type: any) {
                    let currentActuators = currentActuatorList.filter(function (obj) {
                        return obj.type === type.type;
                    })
                    currentActuators.forEach(function (actuator: any, index: number) {
                        if (_.includes(type.numberOfActuator, actuator.idonboard)) {
                            type.numberOfActuator.splice(type.numberOfActuator.indexOf(actuator.idonboard), 1)
                        }
                    })

                    type.numberOfActuator.forEach(function (availableId: any) {
                        result.push({ type: type.type, availableId: availableId });
                    })
                })
                resolve(result);
            }, (err: any) => {
                reject(err);
            })
        })
    }

}