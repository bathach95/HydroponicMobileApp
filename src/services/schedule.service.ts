import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Constant } from '../utils/constant';

@Injectable()
export class ScheduleService {

    constructor(private http: HttpClient) {}

    public getScheduleByCropId(cropId: any): Observable<any> {
        let param: any = new HttpParams().set('cropId', cropId);
        return this.http.get(Constant.HOST + '/schedule/all', {
            params: param
        });
    }

    public getScheduleByCropIdAndActuatorId(cropId: number, actuatorId: number): Observable<any> {
        let url = Constant.HOST + '/schedule/crop/' + cropId + '/actuator/' + actuatorId;
        return this.http.get(url);
    }

    public addSchedule(newSchedule: any): Observable<any> {
        return this.http.post(Constant.HOST + '/schedule/add', newSchedule);
    }

    public deleteSchedule(scheduleId: any, cropId: any): Observable<any> {
        let param: any = new HttpParams().set('scheduleId', scheduleId)
                                        .append('cropId', cropId);;
        return this.http.delete(Constant.HOST + '/schedule/delete', {
            params: param
        })
    }

    public syncScheduleToDevice(cropId: any, mac: string): Observable<any> {
        let param = new HttpParams().set('cropId', cropId)
                                    .append('mac', mac);
        return this.http.get(Constant.HOST + '/schedule/sync', {
            params: param
        })
    }
}