var clientes=[];
var telefonos=[];
function Cliente(cedula, nombre, apellido,genero,direccion,telefonos){
    this.cedula=cedula;
    this.nombre=nombre;
    this.apellido=apellido;
    this.direccion=direccion;
    this.genero=genero;
    this.telefonos=telefonos;

    this.toString=function(){
        var cadena="{";
        
        for(atributo in this){
            if (!(this[atributo] instanceof Function)){                
                cadena+=atributo+":"+this[atributo]+",";
            }
        }
        
        cadena+="}";
        //return "{cedula:"+this.cedula+",nombre:"+this.nombre+",apellido:"+this.apellido+"direccion:"+this.direccion+"}";
        return cadena;
    }
    
}

function Telefono(numero, tipo, operadora){
    this.numero=numero;
    this.tipo=tipo;
    this.operadora=operadora;
}
function Direccion(callePrincipal,calleSecundaria, numero){
    this.callePrincipal=callePrincipal;
    this.calleSecundaria=calleSecundaria;
    this.numero=numero;

    this.toString=function(){
        var cadena="{";
        
        for(atributo in this){
            if (!(this[atributo] instanceof Function)){                
                cadena+=atributo+":"+this[atributo]+",";
            }
        }
        
        cadena+="}";    
        return cadena;
    }

}

function agregar(){
    
    var cedula=document.ClienteForm.cedula.value;
    var nombre=document.ClienteForm.nombre.value;
    var apellido=document.ClienteForm.apellido.value;
    var callePrincipal=document.ClienteForm.callePrincipal.value;
    var genero=document.getElementById("sel_genero").value;

    var calleSecundaria=document.ClienteForm.calleSecundaria.value;
    var numero=document.ClienteForm.numero.value;
    var direccion=new Direccion(callePrincipal,calleSecundaria,numero);
    var cliente =new Cliente(cedula,nombre,apellido,genero,direccion,telefonos);
    
    clientes.push(cliente);
    mostrar();
}

function agregarTelefono(){
    var numero=document.ClienteForm.numeroTelefono.value;
    var tipo=document.ClienteForm.tipo.value;
    var operadora=document.ClienteForm.operadora.value;
    
    telefonos.push(new Telefono(numero,tipo,operadora));
    mostrarTelefonos();
    
}
function mostrar(){
    var table=document.getElementById("lista");
    table.innerHTML="";
    clientes.forEach(function(cliente,indice){
            var row1 = table.insertRow(indice);
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);
            var cell3 = row1.insertCell(2);
            var cell4 = row1.insertCell(3);
            var cell5 = row1.insertCell(4);
            var cell6 = row1.insertCell(5);

            cell1.innerHTML = cliente.cedula;
            cell2.innerHTML = cliente.nombre;
            cell3.innerHTML = cliente.apellido;
            cell4.innerHTML = cliente.direccion.callePrincipal;
            cell5.innerHTML = cliente.direccion.numero;
            cell6.innerHTML = cliente.direccion.calleSecundaria;
        


    });

    var header = table.createTHead();
    
    var row2 = header.insertRow(0);
    row2.innerHTML = "<b>CLIENTES</b>";
    row2.style.textAlign = 'right';
    
    var row3 = header.insertRow(1);
    var cell = row3.insertCell(0);
    cell.innerHTML = "<b>Cedula</b>";
    
    var cell2 = row3.insertCell(1);
    cell2.innerHTML = "<b>Nombre</b>";
    
    var cell3 = row3.insertCell(2);
    cell3.innerHTML = "<b>Apellido</b>";

    var cell4 = row3.insertCell(3);
    cell4.innerHTML = "<b>Calle Principal</b>";

    var cell5 = row3.insertCell(4);
    cell5.innerHTML = "<b>Numero</b>";

    var cell6 = row3.insertCell(5);
    cell6.innerHTML = "<b>Calle Secundaria</b>";


    
        
}

function mostrarTelefonos(){
    var table=document.getElementById("listaTelefonos");
    table.innerHTML="";
    telefonos.forEach(function(telefono,indice){
            var row1 = table.insertRow(indice);
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);
            var cell3 = row1.insertCell(2);

            cell1.innerHTML = telefono.tipo;
            cell2.innerHTML = telefono.operadora;
            cell3.innerHTML = telefono.numero;

    });

    var header = table.createTHead();
    
    var row2 = header.insertRow(0);
    row2.innerHTML = "<b>TELEFONOS</b>";
    row2.style.textAlign = 'right';
    
    var row3 = header.insertRow(1);
    var cell = row3.insertCell(0);
    cell.innerHTML = "<b>Tipo</b>";
    
    var cell2 = row3.insertCell(1);
    cell2.innerHTML = "<b>Operadora</b>";
    
    var cell3 = row3.insertCell(1);
    cell3.innerHTML = "<b>Numero</b>";
        
        
}