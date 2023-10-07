import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/model/interfaces/AuthRequest';
import { CookieService } from 'ngx-cookie-service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  configObject: any;

  agora = new Date();
  expiracao = new Date(this.agora);

  constructor(
    private authService: LoginService,
    private router: Router,
    private cookieService: CookieService,
    private toast: NgToastService) { }

  ngOnInit() {
    this.cookieService.delete('USER_INFO')
  }

  onSubmit(data: AuthRequest) {
      this.authService.login(data)
        .subscribe({
          next: (response) => {
            this.expiracao.setMinutes(this.agora.getMinutes() + 480) //480 minutos(8 Horas) para expirar o cookie
              this.cookieService.set('USER_INFO', response.token, this.expiracao)
              this.router.navigate(['home'])
              this.toast.success({detail:"SUCESSO",summary:'Login efetuado com sucesso!',duration:3000})
          },
          error: (err) => {
            this.cookieService.delete('USER_INFO')
            this.configObject = this.toast.error({detail:"ERRO",summary:'Erro ao efetuar o login, usuario ou senha inválidos',duration:3000})
          }
        })
  }

}
