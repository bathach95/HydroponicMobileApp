import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';
@Injectable()
export class ThresholdService {
    constructor(private http: HttpClient) {

    }

    public getThreshold(cropId: any): Observable<any> {
        let params = new HttpParams().set('cropId', cropId);
        return this.http.get(Constant.HOST + '/threshold/newest', { params: params });
    }
}