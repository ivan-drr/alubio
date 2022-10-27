import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { MatagatosService } from './matagatos.service';


@Injectable({
    providedIn: 'root'
})
export class GorestInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService, private matagatosService: MatagatosService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes(environment.baseUrl) || !this.authService.loggedIn) return next.handle(req);
        this.matagatosService.incrementMatagatos();

        const tokenizeReq = req.clone({
            setHeaders: {
                Accept: 'application/json',
                ContentType: 'application/json',
                Authorization: `Bearer ${this.authService.getToken()}`
            }
        });
        return next.handle(tokenizeReq);
    }

}