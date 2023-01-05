
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

  constructor(private produtoService: ProdutoServices) { }


  ngOnInit(): void {
    this.produto = new Produto();
  }

  public inputChange(files: FileList) {
    this.arquivoSelecionado = files.item(0);
    this.produtoService.enviarArquivo(this.arquivoSelecionado)

   .subscribe(
    retorno => {
      console.log(retorno);
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



