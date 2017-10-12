import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }

    public getNewestDataByCropId(cropId: any): Observable<any>{
        let params = new HttpParams().set('cropId', cropId);
        return this.http.get('http://13.58.114.56:3210/data/newest', {params: params});
    }
}