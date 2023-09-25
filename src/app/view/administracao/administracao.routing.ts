import { ErrorPageComponent } from './../../shared/error-page/error-page.component';
import { Routes, RouterModule } from '@angular/router';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { CadastrarUsuarioComponent } from './gerenciar-usuarios/cadastrar-usuario/cadastrar-usuario.component';


const routes: Routes = [
  { path: '', redirectTo: 'gerenciar-usuarios', pathMatch: 'full'},
  { path: 'gerenciar-usuarios', component: GerenciarUsuariosComponent },


];

export const AdministracaoRoutes = RouterModule.forChild(routes);
