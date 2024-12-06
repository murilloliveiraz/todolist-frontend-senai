import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefasComponent } from './telas/cadastro-tarefas/cadastro-tarefas.component';
import { CadastroUsuariosComponent } from './telas/cadastro-usuarios/cadastro-usuarios.component';
import { GerenciarTarefasComponent } from './telas/gerenciar-tarefas/gerenciar-tarefas.component';

const routes: Routes = [
  {
    path: '',
   component: CadastroTarefasComponent,
   children: [
    {
      path: '', component: CadastroTarefasComponent,
    },
    {
      path: '', component: CadastroUsuariosComponent,
    },
    {
      path: '', component: GerenciarTarefasComponent,
    },
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
