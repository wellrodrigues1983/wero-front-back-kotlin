import { AlertModule } from 'ngx-bootstrap/alert';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login.routing';
import { MaterialModule } from 'src/app/shared/material-shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    MaterialModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  declarations: [LoginComponent, AuthenticateComponent],
  providers: [LoginService],
})
export class LoginModule { }
