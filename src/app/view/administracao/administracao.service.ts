import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/model/interfaces/Page';
import { User } from 'src/app/model/interfaces/User';
import { UserRegisterRequest } from 'src/app/model/interfaces/userRegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AdministracaoService {

  private baseUrl = 'http://localhost:8080/wero/auth/';

  constructor(private http: HttpClient) { }

  registerUser(data: UserRegisterRequest): Observable<UserRegisterRequest> {
    console.log(JSON.stringify(data));
    return this.http.post<UserRegisterRequest>(this.baseUrl + 'register', data)
  }

  updateUser(id: string, data: UserRegisterRequest): Observable<UserRegisterRequest> {
    console.log(JSON.stringify(data));
    return this.http.put<UserRegisterRequest>(this.baseUrl + 'update-user/'+id, data)
  }

  getAllUsers(page: number, size: number): Observable<Page<User>> {
    const url = `${this.baseUrl + "getusers"}?page=${page}&size=${size}`;
    return this.http.get<Page<User>>(url);
  }

}
