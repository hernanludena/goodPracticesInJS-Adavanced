package cursojpa.prestamo.entidades;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

public class Prestamo {

	private Integer idPrestamo;

	@Column(name = "fecha_prestamo")
	private Date fechaPrestamo;

	@Column(name = "id_cliente")
	private String idCliente;

	@Column(name = "monto_total")
	private BigDecimal montoTotal;
	
	private List<DetallePrestamo>detallesPrestamo;
	

	public Integer getIdPrestamo() {
		return idPrestamo;
	}

	public void setIdPrestamo(Integer idPrestamo) {
		this.idPrestamo = idPrestamo;
	}

	public Date getFechaPrestamo() {
		return fechaPrestamo;
	}

	public void setFechaPrestamo(Date fechaPrestamo) {
		this.fechaPrestamo = fechaPrestamo;
	}

	public String getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(String idCliente) {
		this.idCliente = idCliente;
	}

	public BigDecimal getMontoTotal() {
		return montoTotal;
	}

	public void setMontoTotal(BigDecimal montoTotal) {
		this.montoTotal = montoTotal;
	}

	public List<DetallePrestamo> getDetallesPrestamo() {
		return detallesPrestamo;
	}

	public void setDetallesPrestamo(List<DetallePrestamo> detallesPrestamo) {
		this.detallesPrestamo = detallesPrestamo;
	}
	
	
}
