import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PRINCIPAL_ROUTES } from './principal.routing';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRINCIPAL_ROUTES)
  ]
})
export class PrincipalModule { }
