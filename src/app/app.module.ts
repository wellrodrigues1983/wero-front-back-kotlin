import { BsModalService } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginModule } from './view/login/login.module';
import { PrincipalModule } from './view/principal/principal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgToastModule } from 'ng-angular-popup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdministracaoModule } from './view/administracao/administracao.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlPtBr } from './_utils/paginator-ptbr-i8n';
import { MaterialModule } from './shared/material-shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    PrincipalModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AdministracaoModule,
    RouterModule,
    MaterialModule
  ],
  providers: [BsModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
