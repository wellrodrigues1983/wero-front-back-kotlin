import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subscriber, tap } from 'rxjs';
import { AuthRequest } from 'src/app/model/interfaces/AuthRequest';
import { AuthResponse } from 'src/app/model/interfaces/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/wero/auth/';

  constructor(private http: HttpClient, private cookie: CookieService) { }

  //Autenticando Usuario
  login(data: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl+'login', data)
  }

  //Verificando se o usuario já possui o token ou cookie
  isLoggedIn(): boolean {
    const JWT_TOKEN = this.cookie.get('USER_INFO')
    return JWT_TOKEN ? true : false
  }

  getToken(): string {
    return this.cookie.get('USER_INFO')
  }


}
