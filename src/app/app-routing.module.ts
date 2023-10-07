import { AdministracaoModule } from './view/administracao/administracao.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () => import('./view/principal/principal.module').then((m) => m.PrincipalModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'administracao/gerenciar-usuarios',
    loadChildren: () => import('./view/administracao/administracao.module').then((m) =>
 m.AdministracaoModule),
    canActivate: [AuthGuard]
  },
  {
    path: "financeiro",
    loadChildren: () => import('./view/financeiro/financeiro.module').then((m) => m.FinanceiroModule),
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
