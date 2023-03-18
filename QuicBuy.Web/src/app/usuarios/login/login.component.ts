import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { UsuarioServices } from "src/app/services/usuario/usuario.services";

import { Usuario } from "src/app/model/usuario";



@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})


export class LoginComponent implements OnInit{
  public usuario;
  public returnUrl: string ;
  public mensagem: string;
  private ativar_spinnner: boolean;

constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private usuarioServices: UsuarioServices) {


 }

  ngOnInit(): void
  {
    this.usuario = new Usuario();
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];

  }

  entrar() {

    this.ativar_spinnner = true;

    this.usuarioServices.verficarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          //essa linha será executada no caso de retorno sem erros
         this.usuarioServices.usuario = usuario_json;

          if( this.returnUrl == null)

          {
            this.router.navigate(['/']);
          }

          else

          {
            this.router.navigate([this.returnUrl]);
          }

          this.router.navigate([this.returnUrl]);

        },
        err =>{

          this.mensagem = err.error;

        }
      );

   if(this.usuario.email == "guilhermereedy@gmail.com" && this.usuario.senha == "123")
    sessionStorage.setItem("usuario-autenticado", "1");
    this.router.navigate([this.returnUrl]);

  }
}

