package cursojpa.prestamo.controladores;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;

import cursojpa.prestamo.entidades.Prestamo;

@ManagedBean
@ViewScoped
public class BuscarPrestamoControlador {

	
	private String idCliente;
	
	private Prestamo prestamo;

	public BuscarPrestamoControlador() {
		prestamo = new Prestamo();
	}
	
	public void buscarPrestamo(){
		
	}
	
	public String getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(String idCliente) {
		this.idCliente = idCliente;
	}

	public Prestamo getPrestamo() {
		return prestamo;
	}

	public void setPrestamo(Prestamo prestamo) {
		this.prestamo = prestamo;
	}
	
	
}
