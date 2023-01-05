import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServices } from '../services/usuario/usuario.services';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;


  constructor(private router: Router, private usuarioServices: UsuarioServices) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {

    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean{return this.usuarioServices.usuario_autenticado();

  }

  sair(){

   this.usuarioServices.limpar_sessao();
    this.router.navigate(['/'])

  }

  get usuario() { return this.usuarioServices.usuario; }


}
