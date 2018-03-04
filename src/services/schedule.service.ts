import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';

@Injectable()
export class ScheduleService {

    constructor(private http: HttpClient) {}

    public getScheduleByCropId(cropId: any): Observable<any> {
        let param = new HttpParams().set('cropId', cropId);
        return this.http.get(Constant.HOST + '/schedule/all', {
            params: param
        });
    }

    public addSchedule(newSchedule: any): Observable<any> {
        return this.http.post(Constant.HOST + '/schedule/add', newSchedule);
    }
}