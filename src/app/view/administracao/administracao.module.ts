import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './gerenciar-usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { AdministracaoService } from './administracao.service';
import { AdministracaoRoutes } from './administracao.routing';
import { EditarUsuarioComponent } from './gerenciar-usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './gerenciar-usuarios/listar-usuario/listar-usuario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import { MaterialModule } from 'src/app/shared/material-shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AdministracaoRoutes,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    MaterialModule
  ],
  declarations: [
    CadastrarUsuarioComponent,
    EditarUsuarioComponent,
    ListarUsuarioComponent,
    GerenciarUsuariosComponent
  ],
  providers: [AdministracaoService]
})
export class AdministracaoModule { }
