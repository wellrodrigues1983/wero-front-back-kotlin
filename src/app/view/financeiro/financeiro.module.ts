import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroDashboardComponent } from './financeiro-dashboard/financeiro-dashboard.component';
import { CadastroFornecedoresComponent } from './cadastro-fornecedores/cadastro-fornecedores.component';
import { FinanceiroRoutes } from './financeiro.routing';
import { FinanceiroService } from './financeiro.service';
import { MaterialModule } from 'src/app/shared/material-shared/material/material.module';
import { ContasAPagarComponent } from './contas-a-pagar/contas-a-pagar.component';
import { ContasAReceberComponent } from './contas-a-receber/contas-a-receber.component';
import { CepMaskDirective } from 'src/app/_utils/directives/cepMask.directive';
import { UpperCaseDirective } from 'src/app/_utils/directives/upperCase.directive';



@NgModule({
  declarations: [
    FinanceiroDashboardComponent,
    CadastroFornecedoresComponent,
    ContasAPagarComponent,
    ContasAReceberComponent,
    UpperCaseDirective,
    CepMaskDirective
  ],
  imports: [
    CommonModule,
    FinanceiroRoutes,
    MaterialModule

  ],
  providers: [
    FinanceiroService
  ]
})
export class FinanceiroModule { }
