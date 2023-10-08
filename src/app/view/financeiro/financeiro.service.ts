import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedores } from 'src/app/model/interfaces/Fornecedores';


@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  private baseUrl = 'http://localhost:8080/wero';
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

  saveFornecedores(data: Fornecedores): Observable<Fornecedores>{
    const url = `${this.baseUrl}/fornecedores/cadastrar`
    return this.http.post<Fornecedores>(url, data);
  }
}
