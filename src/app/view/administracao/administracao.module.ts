import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarUsuarioComponent } from './gerenciar-usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { AdministracaoService } from './administracao.service';
import { AdministracaoRoutes } from './administracao.routing';
import { EditarUsuarioComponent } from './gerenciar-usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './gerenciar-usuarios/listar-usuario/listar-usuario.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { GerenciarUsuariosComponent } from './gerenciar-usuarios/gerenciar-usuarios.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    AdministracaoRoutes,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule ,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
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
