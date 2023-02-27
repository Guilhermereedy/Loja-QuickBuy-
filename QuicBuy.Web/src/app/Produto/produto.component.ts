
import { Component, OnInit } from "@angular/core"
import { Produto } from "../model/produto";
import { ProdutoServices } from "../services/produto/produto.services";
import { Router } from "@angular/router";


@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})

export class ProdutoComponent implements OnInit {

  public produto: Produto;
  public arquivoSelecionado: File;
  public ativar_spinner: boolean;

  constructor(private produtoService: ProdutoServices) { }


  ngOnInit(): void {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.ativar_spinner = true;
    this.produtoService.enviarArquivo(this.arquivoSelecionado)
   .subscribe(
    nomeArquivo => {
      this.produto.nomeArquivo = nomeArquivo;
      alert(this.produto.nomeArquivo);
      console.log(nomeArquivo);
      this.ativar_spinner = false;
    },
    err => {
      console.log(err.error);
    }
   );

  }

  public cadastrar() {
    //this.produto
    this.produtoService.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          console.log(produtoJson);
        },  );

        err => {
          console.log(err.error);
        }

}
}



