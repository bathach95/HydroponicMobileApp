import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }

    public getDataStatus(data: any, threshold: any) {
        let status = {
            badStatus: {
                temp: data.temperature < threshold.temperatureLower || data.temperature > threshold.temperatureUpper,
                humidity: data.humidity < threshold.humidityLower || data.humidity > threshold.humidityUpper,
                ppm: data.ppm < threshold.ppmLower || data.ppm > threshold.ppmUpper,
                ph: data.ph < threshold.phLower || data.ph > threshold.phUpper
            },
            status: true
        }

        status.status = status.badStatus.temp || status.badStatus.humidity || status.badStatus.ppm || status.badStatus.ph;
        return status;
    }

    public getNewestDataByCropId(cropId: any): Observable<any> {
        let params = new HttpParams().set('cropId', cropId);
        return this.http.get('http://192.168.1.106:3210/data/newest', { params: params });
    }
}