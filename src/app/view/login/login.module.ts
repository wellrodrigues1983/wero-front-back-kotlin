import { AlertModule } from 'ngx-bootstrap/alert';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule
  ],
  declarations: [LoginComponent, AuthenticateComponent],
  providers: [LoginService],
})
export class LoginModule { }
