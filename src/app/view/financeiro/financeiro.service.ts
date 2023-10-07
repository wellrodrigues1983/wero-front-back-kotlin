import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  private readonly apiViaCep = 'https://viacep.com.br/ws';
  private readonly apiCnpj = 'https://brasilapi.com.br/api/cnpj/v1' //api brasilApi para consultar cadastro de empresas


  constructor(private http: HttpClient) { }

  getAddressByCep(cep: string): Observable<any> {
    const url = `${this.apiViaCep}/${cep}/json/`;
    return this.http.get(url);
  }

  getCnpjInfo(cnpj: string): Observable<any>{
    const url = `${this.apiCnpj}/${cnpj}`;
    return this.http.get(url);
  }
}
