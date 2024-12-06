import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroTarefasComponent } from './telas/cadastro-tarefas/cadastro-tarefas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroUsuariosComponent } from './telas/cadastro-usuarios/cadastro-usuarios.component';
import { GerenciarTarefasComponent } from './telas/gerenciar-tarefas/gerenciar-tarefas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    NavbarComponent,
    CadastroTarefasComponent,
    CadastroUsuariosComponent,
    GerenciarTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
