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
        let params: any = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/actuator/all', { params: params });
    }

    public changeActuatorStatus(actuator: any, newStatus: string, mac: string): Observable<any> {
        let body: any = {
            id: actuator.id,
            mac: mac,
            status: newStatus,
            idonboard: actuator.idonboard,
            mode: actuator.mode
        }
        return this.http.put(Constant.HOST + '/actuator/status', body);
    }

    public changeActuatorMode(mac: string, actuator: any, newMode: string): Observable<any> {
        let body: any = {
            id: actuator.id,
            mac: mac,
            status: actuator.status,
            idonboard: actuator.idonboard,
            mode: newMode
        }
        return this.http.put(Constant.HOST + '/actuator/mode', body);
    }

    public addActuator(newActuator: any): Observable<any> {
        return this.http.post(Constant.HOST + '/actuator/addactuator', newActuator);
    }

    public deleteActuator(actuator: any) {
        let param: any = new HttpParams().set('id', actuator.id)
                                        .append('mac', actuator.mac)
                                        .append('idonboard', actuator.idonboard)
                                        .append('priority', actuator.priority);                                        
        return this.http.delete(Constant.HOST + '/actuator/delete', {
            params: param
        });
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