import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { TaskService } from './../../services/task.service';
import { UsuarioResponse } from 'src/models/usuarioResponse';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-cadastro-tarefas',
  templateUrl: './cadastro-tarefas.component.html',
  styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent {
  constructor(public formBuilder: FormBuilder, private userService: UsuariosService, private taskService: TaskService){}
  cadastroForm: FormGroup;
  usuarios: UsuarioResponse[];

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        description: ['', [Validators.required]],
        section: ['', [Validators.required]],
        priority: ['', [Validators.required]],
        user: ['', [Validators.required]],
      }
    )
    const usuariosObserver = {
      next: (data: UsuarioResponse[]) => {
        this.usuarios = data;
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };
  }

  get dadosForm(){
    return this, this.cadastroForm.controls;
  }

  cadastrar() {
    const observer = {
      next: (user: UsuarioResponse) => {
        alert("cadastro Concluido")
      },
      error: (err: any) => {
        alert('Ocorreu um erro');
      }
    };

    const user: Usuario = {
      nome: this.dadosForm["nome"]?.value,
      email: this.dadosForm["email"]?.value
    }

    this.userService.createUser(user).subscribe(observer);
  }
}
