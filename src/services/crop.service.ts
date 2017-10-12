import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CropService {
    constructor(private http: HttpClient) {

    }

    public getNewestCropByDeviceMac(mac: any): Observable<any>{
        let params = new HttpParams().set('mac', mac);
        return this.http.get('http://13.58.114.56:3210/crop/newest', {params: params})
    }
}