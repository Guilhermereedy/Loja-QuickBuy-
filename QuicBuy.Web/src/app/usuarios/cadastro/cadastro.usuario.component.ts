import { Component, OnInit } from '@angular/core';

import { UsuarioServices } from '../../services/usuario/usuario.services';
import { Usuario } from 'src/app/model/usuario';




@Component({

  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]

})


export class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario;
  public ativar_spinner: boolean;
  public mensagem: string;
  public usuarioCadastrado: boolean;

  constructor(private usuarioServices: UsuarioServices) {

  }
  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public cadastrar() {
    this.ativar_spinner = true;

    this.usuarioServices.cadastrarUsuario(this.usuario)
      .subscribe(
        usuarioJson => {
          this.usuarioCadastrado = true;
          this.mensagem = "";
          this.ativar_spinner = false;
        },
        e => {
          this.mensagem = e.error;
          this.ativar_spinner = false;
        }
      );
  }

}
