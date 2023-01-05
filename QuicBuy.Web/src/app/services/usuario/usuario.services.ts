import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";

import { Observable } from "rxjs";
import { Usuario } from "src/app/model/usuario";



@Injectable({

providedIn: "root"

})

export class UsuarioServices{

  private baseURL: string;
  private _usuario: Usuario;

  set usuario(usuario: Usuario)

  {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario
  {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }

  public usuario_autenticado(): boolean

  {

    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";

  }

  public limpar_sessao()

  {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;

  }

  get headers(): HttpHeaders {

    return new HttpHeaders().set('content-type', 'application/json');

  }

  constructor( private http: HttpClient, @Inject("BASE_URL") baseUrl: string){

        this.baseURL = baseUrl;

      }

      public verficarUsuario(usuario: Usuario ): Observable<Usuario> {

        const headers = new HttpHeaders().set('content-type', 'application/json');

       // return this.http.get<Usuario>(this.baseURL + "api/Usuario/VerificarUsuario");

       var body = {

        email: usuario.email,
        senha: usuario.senha

       }

       //this.baseURL = raiz do site que pode ser exemplo: http://www.quickbuy.com.br/

       return this.http.post<Usuario>(this.baseURL + "api/Usuario/VerificarUsuario",
        body, {headers});

      }

      public cadastrarUsuario(usuario: Usuario): Observable<Usuario> {

        return this.http.post<Usuario>(this.baseURL + "api/usuario/", JSON.stringify(usuario),{headers: this.headers});

      }

  }



