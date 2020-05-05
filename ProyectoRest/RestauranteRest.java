package curso.restaurantes.rest;

import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import curso.restaurantes.entidades.Restaurante;
import curso.restaurantes.servicios.RestauranteServicios;

@Path("/restauranteService")
@Stateless //Es necesario para que el rest pueda comunicarse con el Stateless session bean
public class RestauranteRest {
	
	@EJB
	RestauranteServicios service;
	
	
	@Path(value="/recuperarTodos")
	@GET
	@Produces("application/json")
	public List<Restaurante> recuperar(){
		return service.recuperar();
	}
}
