package cursojpa.facturacion.controladores;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;

import cursojpa.facturacion.entidades.Menu;
import cursojpa.facturacion.entidades.Usuario;
import cursojpa.facturacion.servicios.MenuServicio;
import cursojpa.facturacion.servicios.UsuarioServicio;

@ManagedBean
public class UsuarioControlador {

	private Usuario usuario;
	private List<Menu> menues;

	@EJB
	private UsuarioServicio usuarioServicio;

	@EJB
	private MenuServicio menuServicio;

	public UsuarioControlador() {
		usuario = new Usuario();

	}

	public void validar() throws IOException {
		Usuario encontrado=usuarioServicio.buscar(usuario);

		if (encontrado == null) {
			System.out.println("No existe");
			FacesContext context = FacesContext.getCurrentInstance();

			context.addMessage(null, new FacesMessage("No existe el usuario"));
		} else {
			menues = menuServicio.buscarPrincipales(encontrado.getId());
			System.out.println(menues);
			// sobreescribir toString de menu
			FacesContext.getCurrentInstance().getExternalContext()
					.redirect("facturacion.jsf");
		}

	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
