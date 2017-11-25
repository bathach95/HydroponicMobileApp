import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ThresholdService{
    constructor(private http: HttpClient){

    }

    public getThreshold(cropId: any): Observable<any>{
        let params = new HttpParams().set('cropId', cropId);
        return this.http.get('http://192.168.10.238:3210/threshold/newest', {params: params});
    }
}