import { BsModalService } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './view/login/login.module';
import { PrincipalModule } from './view/principal/principal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgToastModule } from 'ng-angular-popup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AdministracaoModule } from './view/administracao/administracao.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import {MatCardModule} from '@angular/material/card';




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
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    AdministracaoModule,
    RouterModule,
    MatCardModule


  ],
  providers: [BsModalService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
