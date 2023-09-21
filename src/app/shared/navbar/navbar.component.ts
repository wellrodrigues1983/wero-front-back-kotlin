import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private toast: NgToastService) { }

  ngOnInit() {
  }

  logoff(){
    this.cookieService.delete("USER_INFO")
    this.router.navigate([''])
    this.toast.success({detail:"SUCESSO",summary:'Logoff efetuado com sucesso!',duration:3000})
  }

}
