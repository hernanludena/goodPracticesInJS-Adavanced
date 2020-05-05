var clientes = [];
var telefonos = [];

//creacion de objeto sin funcion constructora
function agregar() {
    var cliente = {
        cedula: document.p.cedula.value,
        nombre: document.p.nombre.value,
        apellido: document.p.apellido.value,
        direccion: {
            calleP: document.p.calleP.value,
            calleS: document.p.calleS.value,
            numero: document.p.numero.value,
            toString : function(){
                var cadena= "";
                for(atributo in this){
                    if(!(this[atributo] instanceof Function)){
                         cadena+=atributo+ ": " + this[atributo]+" "; 
                    }           
                }
                return cadena; 
            }   
        },
        genero:document.p.sel_genero.value,        
        toString : function(){
            var cadena= "";
            for(atributo in this){
                if(!(this[atributo] instanceof Function)){
                     cadena+=atributo+ ": " + this[atributo]+" ";
                }           
            }
            return cadena;     
        },
        telefonos:telefonos       
  }
    
    //cliente.telefonos = telefonos;
   /* cliente.telefonos.toString = function(){
        var cadena= "";       
        for(var i=0;i<telefonos.length;i++)
        {
            cadena+= "Telefono: "+telefonos[i].numeroT+ " "+ 
                telefonos[i].operadora+ " "+
                telefonos[i].tipo + " ";
        }   
        
        return cadena; 
    } */

    
    clientes.push(cliente);
    mostrar();
    limpiar();
    
    //cliente.telefonos = [];
}    


function agregarTelefono(){
    var t1 = {
        numeroT: document.p.numeroT.value,
        tipo: document.p.sel_tipo.value,
        operadora: document.p.sel_operadora.value,
        toString: function () {
            var cadena = "";
            for (atributo in this) {
                if (!(this[atributo] instanceof Function)) {
                    cadena += atributo + ":" + this[atributo] + " \n"; // Imprime nombre de atributo y su valor
                }
            }
            return cadena;

        }
     };
    telefonos.push(t1); 
    
    
}


function mostrar(){
    var cadena=""; 
    clientes.forEach(function(c){
        //cadena+= c.toString()+ '\n';  //to String de Cliente
        cadena+= c+ '\n';  //sobreescribe toString de Object       
    });
    
  /*  var cadenaImprimirTextBox = '';
    for (var i = 0; i < clientes.length; i++) {
        cadenaImprimirTextBox = cadenaImprimirTextBox + clientes[i];
    }*/
        
    //document.p.clientes.value =cadenaImprimirTextBox;    
    document.p.clientes.value =cadena;
  
}




function limpiar(){
    document.p.cedula.value = "";
    document.p.nombre.value = "";
    document.p.apellido.value = "";
    document.p.calleP.value="";
    document.p.calleS.value="";
    document.p.numero.value = ""
    document.p.numeroT.value = "";
    document.p.sel_tipo.value = "";
    document.p.sel_operadora.value = "";    
    document.p.clientes.value = "";
    telefonos = [];
}

//-----------------------------------------------------------
var student;

function dibujarTabla() {

    var table = document.getElementById("listaClientes");  
    table.innerHTML="";
    //Creación de filas
    //  table.appendChild(document.createElement('tbody'));
    for (var j = 0; j < clientes.length; j++) {
        //  var row2 = table.tBodies[0].insertRow(-1);
        var row1 = table.insertRow(j); //j
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        var cell4 = row1.insertCell(3);
        var cell5 = row1.insertCell(4);
        var cell6 = row1.insertCell(5);
        var cell7 = row1.insertCell(6);
        var cell8 = row1.insertCell(7);
        
       cell1.innerHTML = clientes[j].cedula;
       cell2.innerHTML = clientes[j].nombre;
       cell3.innerHTML = clientes[j].apellido;
       cell4.innerHTML = clientes[j].direccion.calleP;
       cell5.innerHTML = clientes[j].direccion.calleS;
       cell6.innerHTML = clientes[j].direccion.numero;
       cell7.innerHTML = clientes[j].genero;
       cell8.innerHTML = clientes[j].telefonos;
       
       /* cell1.innerHTML = "Fila " + j + "  " + "Columna 0",
        cell2.innerHTML = "Fila " + j + "  " + "Columna 1";
        cell3.innerHTML = "Fila " + j + "  " + "Columna 1";
        cell4.innerHTML = "Fila " + j + "  " + "Columna 1";
        cell5.innerHTML = "Fila " + j + "  " + "Columna 1";
        cell6.innerHTML = "Fila " + j + "  " + "Columna 1";*/
        
    }


    var header = table.createTHead();
    
    var row2 = header.insertRow(0);
    row2.innerHTML = "<b>CLIENTES</b>";
    row2.style.textAlign = 'right';
    
    var row3 = header.insertRow(1);
    var cell = row3.insertCell(0);
    cell.innerHTML = "<b>CEDULA</b>";
    
    var cell2 = row3.insertCell(1);
    cell2.innerHTML = "<b>NOMBRE</b>";
    
     var cell3 = row3.insertCell(2);
    cell3.innerHTML = "<b>APELLIDO</b>";
    
     var cell4 = row3.insertCell(3);
    cell4.innerHTML = "<b>CALLE PRIMARIA</b>";
    
    var cell5 = row3.insertCell(4);
    cell5.innerHTML = "<b>CALLE SECUNDARIA</b>";
    
     var cell6 = row3.insertCell(5);
    cell6.innerHTML = "<b>NUMERO</b>";
    
     var cell7 = row3.insertCell(6);
    cell7.innerHTML = "<b>GENERO</b>";
    
    var cell8 = row3.insertCell(7);
    cell8.innerHTML = "<b>TELEFONOS</b>";
}
