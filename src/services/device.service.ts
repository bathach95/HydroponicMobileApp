import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';
@Injectable()
export class DeviceService {

    constructor(private http: HttpClient) {

    }

    public getAllDevice(): Observable<any> {
        return this.http.get(Constant.HOST + '/device/all');
    }

    public getDeviceByMac(mac: any): Observable<any> {
        let params = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/device/one', { params: params });
    }

    public addNewDevice(newDevice: any) {
        return this.http.post(Constant.HOST + '/device/add', newDevice);
    }

    public updateStatus(mac: any, status: any): Observable<any> {
        let body = {
            mac: mac,
            status: status
        }
        return this.http.put(Constant.HOST + '/device/status', body);
    }


}