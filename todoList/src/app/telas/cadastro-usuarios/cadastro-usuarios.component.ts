import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/models/usuario';
import { UsuarioResponse } from 'src/models/usuarioResponse';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent {

  constructor(public formBuilder: FormBuilder, private userService: UsuariosService){}
  cadastroForm: FormGroup;

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        nome: ['', [Validators.required]],
      }
    )
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
