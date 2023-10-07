import { Routes, RouterModule } from '@angular/router';
import { FinanceiroDashboardComponent } from './financeiro-dashboard/financeiro-dashboard.component';
import { CadastroFornecedoresComponent } from './cadastro-fornecedores/cadastro-fornecedores.component';
import { ContasAPagarComponent } from './contas-a-pagar/contas-a-pagar.component';
import { ContasAReceberComponent } from './contas-a-receber/contas-a-receber.component';

const routes: Routes = [
  {
    path: "",
    component: FinanceiroDashboardComponent
   },
   {
    path: "cadastro-fornecedores",
    component: CadastroFornecedoresComponent
   },
   {
    path: "contas-a-pagar",
    component: ContasAPagarComponent
   },
   {
    path: "contas-a-receber",
    component: ContasAReceberComponent
   }
];

export const FinanceiroRoutes = RouterModule.forChild(routes);
