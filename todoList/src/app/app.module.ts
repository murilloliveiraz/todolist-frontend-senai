import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CadastroTarefasComponent } from './telas/cadastro-tarefas/cadastro-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    NavbarComponent,
    CadastroTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
