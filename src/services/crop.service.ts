import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';
@Injectable()
export class CropService {
    constructor(private http: HttpClient) {

    }

    public getNewestCropByDeviceMac(mac: any): Observable<any>{
        let params = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/crop/newest', {params: params});
    }
}