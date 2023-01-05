using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Config
{
    internal class PedidoConfiguration : IEntityTypeConfiguration<Pedido>
    {
        public void Configure(EntityTypeBuilder<Pedido> builder)
        {
            builder.HasKey(p => p.Id);
            builder
            .Property(p => p.DataPedido)
            .IsRequired();
            builder
            .Property(p => p.DataPrevisaoEntrega)
            .IsRequired();
            
            builder
            .Property(p => p.CEP)
            .IsRequired()
            .HasMaxLength(10);
            builder
            .Property(P => P.Cidade)
            .IsRequired()
            .HasMaxLength(100);
            builder
           .Property(P => P.Estados)
           .IsRequired()
           .HasMaxLength(100);
            builder
          .Property(P => P.EnderecoCompleto)
          .IsRequired()
          .HasMaxLength(100);
            builder
         .Property(P => P.NumeroEndereco)
         .IsRequired();

            builder
            .HasOne(p => p.Usuario);



        }
    }
}
