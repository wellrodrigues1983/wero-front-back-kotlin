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


@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule

  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
