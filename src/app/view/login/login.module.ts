import { AlertModule } from 'ngx-bootstrap/alert';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login.routing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule ,
    MatCardModule,

    RouterModule.forChild(LOGIN_ROUTES)
  ],
  declarations: [LoginComponent, AuthenticateComponent],
  providers: [LoginService],
})
export class LoginModule { }
