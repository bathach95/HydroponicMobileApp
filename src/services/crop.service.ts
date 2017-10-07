import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CropService {
    constructor(private http: HttpClient) {

    }

    public getCropByDeviceMac(mac: any){

    }
}