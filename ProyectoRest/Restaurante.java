package curso.restaurantes.entidades;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="restaurantes")
public class Restaurante {
	
	@Id
	private int codigo;
	private String nombre;
	private String telefono;
	
	public Restaurante(){
		
	}
	
	public Restaurante(int codigo, String nombre, String telefono) {
		super();
		this.codigo = codigo;
		this.nombre = nombre;
		this.telefono = telefono;
	}

	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
	
	
	
}
