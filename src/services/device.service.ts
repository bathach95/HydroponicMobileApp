import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from './constant.service';
@Injectable()
export class DeviceService {

    constructor(private http: HttpClient, private constant: Constant) {

    }

    public getAllDevice(): Observable<any> {
        return this.http.get(this.constant.HOST + '/device/all');
    }

    public getDeviceByMac(mac: any): Observable<any> {
        let params = new HttpParams().set('mac', mac);
        return this.http.get(this.constant.HOST + '/device/one', { params: params });
    }

    public addNewDevice(newDevice: any) {
        return this.http.post(this.constant.HOST + '/device/add', newDevice);
    }

    public updateStatus(mac: any, status: any): Observable<any> {
        let body = {
            mac: mac,
            status: status
        }
        return this.http.put(this.constant.HOST + '/device/status', body);
    }


}