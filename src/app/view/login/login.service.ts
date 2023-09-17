import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, tap } from 'rxjs';
import { AuthRequest } from 'src/app/model/interfaces/AuthRequest';
import { AuthResponse } from 'src/app/model/interfaces/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/wero/auth/';

  constructor(private http: HttpClient) { }

  login(data: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl+'login', data)
  }


}
