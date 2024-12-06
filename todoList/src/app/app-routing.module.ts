import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTarefasComponent } from './telas/cadastro-tarefas/cadastro-tarefas.component';
import { CadastroUsuariosComponent } from './telas/cadastro-usuarios/cadastro-usuarios.component';
import { GerenciarTarefasComponent } from './telas/gerenciar-tarefas/gerenciar-tarefas.component';

const routes: Routes = [
  {
    path: '',
   component: GerenciarTarefasComponent
  },
  {
    path: 'cadastrar-tarefa', component: CadastroTarefasComponent,
  },
  {
    path: 'cadastrar-usuario', component: CadastroUsuariosComponent,
  },
  {
    path: 'tarefas', component: GerenciarTarefasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
