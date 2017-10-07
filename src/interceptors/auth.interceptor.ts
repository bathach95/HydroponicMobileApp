import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

    private token: any;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token  = localStorage.getItem('token') ;
        this.token = token ? token : '';
        
        const dupReq = req.clone({ headers: req.headers.set('token', this.token) });
        return next.handle(dupReq);
    }
}
