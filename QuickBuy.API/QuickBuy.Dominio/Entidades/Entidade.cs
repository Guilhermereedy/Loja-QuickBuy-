using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        public List<string> _mensagensValidacao { get; set; }
        private List<string> mensagensValidacao
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); }
        }
        protected void LimparMensagensValidacao()
        {
            mensagensValidacao.Clear();
        }
        protected void AdicionarCritica(string mensagem)
        {
            mensagensValidacao.Add(mensagem);
        }

        public abstract void Validade();
        protected bool EhValido
        {
            get { return !mensagensValidacao.Any(); }
        }
    }
}
