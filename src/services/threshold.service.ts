import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constant } from './constant.service';
@Injectable()
export class ThresholdService {
    constructor(private http: HttpClient, private constant: Constant) {

    }

    public getThreshold(cropId: any): Observable<any> {
        let params = new HttpParams().set('cropId', cropId);
        return this.http.get(this.constant.HOST + '/threshold/newest', { params: params });
    }
}