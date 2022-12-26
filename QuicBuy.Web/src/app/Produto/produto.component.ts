import { Component } from "@angular/core"

@Component({
  selector: "app-produto",
  template:"<html><body>{{ obterNome()}}}</body></html>"
})

export class ProdutoComponent
{
  // Nome das classes começando com maiusculo por conta da converção PascalCase
  //camelCase para variáveis, atributos e nomes das funcções
  public nome: string;
  public LiberadoParaVenda: boolean;

  public obterNome(): string {
    return "Samsung";
  }
}
