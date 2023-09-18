import { Router, UrlTree } from '@angular/router';
import { LoginService } from './../view/login/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.loginService.isLoggedIn()){
      this.router.navigate(['/login']);
      return false
    }

    this.loginService.isLoggedIn()
    return true;
  }
}
