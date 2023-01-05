using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entidades;
using System;
using System.Collections.Generic;


namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller}")]

public class UsuarioController : Controller
{

	[httpGet]

	public ActionResult Get()
	{
		try
		{
			return Ok();
		}

		catch(Exception ex)
		{
			return BadRequest(ex.Message);
		}

	}


	[httpPost("VerificarUsuario")]

	public ActionResult verificarUsuario([FromBody] Usuario usuario)
	{
		try
		{	
			if(usuario.Email == "guilhermereedy@gmail.com" && usuario.Senha == "123")
			
			return Ok(usuario);
			

			return BadRequest("Usuario ou senha invalido");
		
		}

		catch(Exception ex)
		{
			return BadRequest(ex.Message);
		}

	}

	[HttpPost]

	public ActionResult Post()
	{
		try
		{
			return Ok();
		}

		catch(Exception ex)
		{
			return BadRequest(ex.Message);
		}

	}
	
}

}