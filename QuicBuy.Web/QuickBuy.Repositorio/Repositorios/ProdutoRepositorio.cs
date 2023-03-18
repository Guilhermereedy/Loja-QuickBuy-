using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositorios
{
    public class ProdutoRepositorios : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorios(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }
    }
}
