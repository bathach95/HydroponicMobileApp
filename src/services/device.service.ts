import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeviceService {

    constructor(private http: HttpClient) {

    }

    public getAllDevice(): Observable<any>{
        return this.http.get('http://192.168.1.106:3210/device/all');
    }

    public getDeviceByMac(mac: any): Observable<any>{
        let params = new HttpParams().set('mac', mac);
        return this.http.get('http://192.168.1.106:3210/device/one', {params: params});
    }

}