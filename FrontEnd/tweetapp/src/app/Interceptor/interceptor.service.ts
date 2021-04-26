import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceServiceService } from '../Service/auth-service-service.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public authService: AuthServiceServiceService) { }

 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();
    if(token){
      req= req.clone({headers: req.headers.set('Authorization','BEARER '+token)});
      console.log(req.headers);
      return next.handle(req);
    }
    else{
      return next.handle(req);
    }
   
  }
}
