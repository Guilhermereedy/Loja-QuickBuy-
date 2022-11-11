using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class ItemPedido
    {
        public int Id { get; set; }
        public string ProdutoId { get; set; }    
        public int Quantidade { get; set; }
    }
}
