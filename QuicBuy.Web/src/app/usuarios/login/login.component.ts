import { Component } from "@angular/core";
import { Usuario } from "src/model/usuario";



@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})


export class LoginComponent {
  public usuario;
  public usuarioAutenticado: boolean;
  public usuarios =["usuario1", "usuario2", "usuario3"];

constructor() {

  this.usuario = new Usuario();
 }

  entrar() {

    alert(this.usuario.email + " - " + this.usuario.senha);

  }
}
