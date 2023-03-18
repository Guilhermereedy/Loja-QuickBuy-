import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './usuarios/login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { GuardaRotas } from './autorizacao/guarda.rotas';
import { UsuarioServices } from './services/usuario/usuario.services';
import { CadastroUsuarioComponent } from './usuarios/cadastro/cadastro.usuario.component';
import { ProdutoServices } from './services/produto/produto.services';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    ProdutoComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
      { path: 'entrar', component: LoginComponent},
      { path: 'cadastro-usuario', component: CadastroUsuarioComponent},

    ])
  ],
  providers: [UsuarioServices, ProdutoServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
