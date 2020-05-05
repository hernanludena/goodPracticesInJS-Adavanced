package curso.restaurantes.servicios;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import curso.restaurantes.entidades.Restaurante;

@Stateless
public class RestauranteServicios {

	@PersistenceContext
	private EntityManager em;
	
	public List<Restaurante> recuperar(){
		Query query = em.createQuery("SELECT r FROM Restaurante r");
		return query.getResultList();
	}
}
