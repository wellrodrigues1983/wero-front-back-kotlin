import { ErrorPageComponent } from './../../shared/error-page/error-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AdministracaoComponent } from './administracao.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';

const routes: Routes = [
  { path: '', component: ErrorPageComponent },
  { path: 'usuario-cadastro', component: CadastrarUsuarioComponent },
  { path: 'usuario-editar', component: EditarUsuarioComponent },
  { path: 'usuario-listar', component: ListarUsuarioComponent },
];

export const AdministracaoRoutes = RouterModule.forChild(routes);
