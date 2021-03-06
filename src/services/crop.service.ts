import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';
@Injectable()
export class CropService {
    constructor(private http: HttpClient) {}

    public getAllCrop(mac: string) {
        let params = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/crop/all', {params: params});
    }

    public getNewestCropByDeviceMac(mac: string): Observable<any>{
        let params = new HttpParams().set('mac', mac);
        return this.http.get(Constant.HOST + '/crop/newest', {params: params});
    }

    public addCrop(crop: any): Observable<any> {
        return this.http.post(Constant.HOST + '/crop/add', crop);
    }

    public getCropById(cropId: any): Observable<any> {
        let param: any = new HttpParams().set('id', cropId);
        return this.http.get(Constant.HOST + '/crop/one', {
            params: param
        });
    }

    public deleteCrop(cropId: any): Observable<any> {
        let param: any = new HttpParams().set('id', cropId);
        return this.http.delete(Constant.HOST + '/crop/delete', {
            params: param
        });
    }
}