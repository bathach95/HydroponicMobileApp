import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    private token: any = null;

    constructor(private storage: Storage){
        this.storage.get('token').then((token) => {
            this.token = token;
        }).catch((err) => {
            console.log(err);
        })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const dupReq = req.clone({ headers: req.headers.set('token', this.token) });
        return next.handle(dupReq);
    }
}
