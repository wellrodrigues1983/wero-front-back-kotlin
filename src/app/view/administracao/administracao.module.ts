import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { AdministracaoService } from './administracao.service';
import { AdministracaoRoutes } from './administracao.routing';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    AdministracaoRoutes
  ],
  declarations: [
    CadastrarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent
  ],
  providers: [AdministracaoService]
})
export class AdministracaoModule { }
