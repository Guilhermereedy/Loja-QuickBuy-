import {Injectable} from "@angular/core";
import{ Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UsuarioServices } from "../services/usuario/usuario.services";



@Injectable({

  providedIn: 'root'

})


export class GuardaRotas implements CanActivate{


  constructor (private router: Router, private usuarioServices: UsuarioServices ){


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //this.usuarioServices


    if(this.usuarioServices.usuario_autenticado() )
    {
      return true;
    }

    alert(state.url);

    this.router.navigate(['/entrar'], {queryParams: { returnUrl: state.url } });

    return false;

  }

}

