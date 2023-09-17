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

  constructor(
    private authService: LoginService,
    private router: Router,
    private cookieService: CookieService,
    private toast: NgToastService) { }

  ngOnInit() {
  }

  onSubmit(data: AuthRequest) {
      this.authService.login(data)
        .subscribe({
          next: (response) => {
              this.cookieService.set('User_Info', response.token)
              this.router.navigate(['home'])
              this.toast.success({detail:"SUCESSO",summary:'Login efetuado com sucesso!',duration:3000})
          },
          error: (err) => {
            this.configObject = this.toast.error({detail:"ERRO",summary:'Erro ao efetuar o login',duration:3000})
          }
        })
  }


  /*  getUser() {
     var token = localStorage.getItem('token')

     if (token != null) {
       try {
         const decodedToken = jwt.decode(token);

         var nameUser = decodedToken?.search('name')
         var role = decodedToken?.search('roles')
         console.log('Nome do usuário: ', nameUser);
         console.log('Roles (funções): ', role);
       } catch (error) {
         console.error('Erro ao decodificar o token JWT:', error);
       }
     } else {
       console.error('Token JWT inválido ou não decodificado.');
     }

   } */
}
