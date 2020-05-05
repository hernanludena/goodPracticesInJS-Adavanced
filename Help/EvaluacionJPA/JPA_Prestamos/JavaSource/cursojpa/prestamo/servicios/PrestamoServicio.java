package cursojpa.prestamo.servicios;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.ejb.Stateless;

import cursojpa.prestamo.entidades.DetallePrestamo;
import cursojpa.prestamo.entidades.Prestamo;
import cursojpa.prestamo.utils.Constantes;


@Stateless
public class PrestamoServicio {

	
	public List<DetallePrestamo> generarCuotas(Prestamo prestamo,int numeroCuotas){
		List<DetallePrestamo> detallesPrestamo = new ArrayList<DetallePrestamo>();
		Calendar c = Calendar.getInstance();
		c.setTime(new Date());
		BigDecimal interesMensual = Constantes.interes.divide(
				new BigDecimal(numeroCuotas), 2, RoundingMode.HALF_UP);
		BigDecimal capital = (prestamo.getMontoTotal()).divide(new BigDecimal(
				numeroCuotas), 2, RoundingMode.HALF_UP);
		BigDecimal interes = prestamo.getMontoTotal().multiply(interesMensual);
		BigDecimal totalCuota = capital.add(interes);
		for (int i = 0; i < numeroCuotas; i++) {
			int numero = i+1;
			c.add(Calendar.DATE, 30);
			DetallePrestamo d = new DetallePrestamo(numero, totalCuota, capital,
					interes, c.getTime());
			detallesPrestamo.add(d);
		}
		return detallesPrestamo;
	}
	
	public void registrarPrestamo(Prestamo prestamo){
		//registra el prestamo y sus detalles
		
	}
	
	/**
	 * Busca el préstamo correspondiente al cliente. Retorna el préstamo con todos los detalles
	 * @param idCliente id del Cliente
	 * @return
	 */
	public Prestamo buscarPorCliente(int idCliente){
		
		return null;
	}
	
	/***
	 * Busca el préstamo y retorna solamente 3 atributos del préstamo
	 * @param idCliente id del cliente
	 * @return
	 */
	public Prestamo buscarSimple(int idCliente){
		
		return null;
	}
	
}
