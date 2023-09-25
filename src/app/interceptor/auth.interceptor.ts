import { LoginService } from './../view/login/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


@Injectable()

export class AuthInterceptor implements HttpInterceptor{

  constructor(private loginService: LoginService, private cookieService: CookieService){ }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    const token = this.loginService.getToken()

    if(token){
      const authRequest = req.clone({setHeaders: {'Authorization' : 'Bearer ' + token}})
      return next.handle(authRequest)
    }
    this.cookieService.delete('USER_INFO')
    return next.handle(req)
  }

}
