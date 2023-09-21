import { Component } from '@angular/core';
import { LoginService } from './view/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wero';

  constructor(private service: LoginService) {

  }

  public check(): boolean {
    const auth = this.service.isLoggedIn()
    if(auth) {
      return true;
    } else {
      return false;
    }
  }
}
