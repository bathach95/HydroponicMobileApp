import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from './constant.service';
@Injectable()
export class CropService {
    constructor(private http: HttpClient, private constant: Constant) {

    }

    public getNewestCropByDeviceMac(mac: any): Observable<any>{
        let params = new HttpParams().set('mac', mac);
        return this.http.get(this.constant.HOST + '/crop/newest', {params: params});
    }
}