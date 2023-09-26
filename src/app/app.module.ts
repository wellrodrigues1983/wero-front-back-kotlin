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
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AdministracaoModule } from './view/administracao/administracao.module';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginatorIntlPtBr } from './_utils/paginator-ptbr-i8n';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';


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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  providers: [BsModalService,
  {
    provide:HTTP_INTERCEPTORS,
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
