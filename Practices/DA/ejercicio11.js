var clientes = [];
var telefonos = [];



function agregar() {

    var cliente = {
        cedula: document.p.cedula.value,
        nombre: document.p.nombreCliente.value,
        apellido: document.p.apellido.value,
        genero: document.p.sel_genero.value,
        direccion: {
            callePrincipal: document.p.callePrincipal.value,
            calleSecundaria: document.p.calleSecundaria.value,
            numero: document.p.numero.value,
            toString: function () {
                var cadena = "";
                for (atributo in this) {
                    if (!(this[atributo] instanceof Function)) {
                        cadena += atributo + ":" + this[atributo] + " \n"; // Imprime nombre de atributo y su valor
                    }
                }
                return cadena;

            }

        },
        telefonos: telefonos,
        toString: function () {
            var cadena = "";
            for (atributo in this) {
                if (!(this[atributo] instanceof Function)) {
                    cadena += atributo + ":" + this[atributo] + " \n"; // Imprime nombre de atributo y su valor
                }
            }
            return cadena;

        }
    }


    clientes.push(cliente);
    mostrar(); 
    limpiar();
    
}


function limpiar() {
    telefonos = [];
    document.p.numero_tel.value = "";
    document.p.sel_tipo_tel.value = ""; 
    document.p.sel_operadora.value = "";
    document.p.cedula.value = "";
    document.p.nombreCliente.value = "";
    document.p.apellido.value  = "";
    document.p.callePrincipal.value  = "";
    document.p.calleSecundaria.value = "";
    document.p.numero.value  = "";
}

function agregarTelefono() {

    var telefono = {
        numero: document.p.numero_tel.value,
        tipo: document.p.sel_tipo_tel.value,
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
    }
    telefonos.push(telefono);
}



function mostrar() {
    var cadenaImprimirTextBox = '';
    for (var i = 0; i < clientes.length; i++) {
        cadenaImprimirTextBox = cadenaImprimirTextBox + clientes[i];
    }

    document.p.clientesTxtArea.value = cadenaImprimirTextBox;
    
    dibujarTabla();
}


function dibujarTabla() {

    var table = document.getElementById("myTable");

    for (var i = 0; i < clientes.length; i++) {
        //  var row2 = table.tBodies[0].insertRow(-1);
        var row1 = table.insertRow(i);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        var cell4 = row1.insertCell(3);
        var cell5 = row1.insertCell(4);
        var cell6 = row1.insertCell(5);

        cell1.innerHTML = clientes[i].cedula;
        cell2.innerHTML = clientes[i].nombre;
        cell3.innerHTML = clientes[i].apellido;
        cell4.innerHTML = clientes[i].direccion;
        cell5.innerHTML = clientes[i].telefonos;
        cell6.innerHTML = clientes[i].genero;
    }


    var header = table.createTHead();
    
    var row2 = header.insertRow(0);
    row2.innerHTML = "<b>CLIENTES</b>";
    row2.style.textAlign = 'right';
    
    var row3 = header.insertRow(1);
    var cell = row3.insertCell(0);
    cell.innerHTML = "<b>Cédula</b>";
    var cell2 = row3.insertCell(1);
    cell2.innerHTML = "<b>Nombre</b>";
    var cell3 = row3.insertCell(2);
    cell3.innerHTML = "<b>Apellido</b>";
    var cell4 = row3.insertCell(3);
    cell4.innerHTML = "<b>Dirección</b>";
    var cell5 = row3.insertCell(4);
    cell5.innerHTML = "<b>Telefonos</b>";
    var cell6 = row3.insertCell(5);
    cell6.innerHTML = "<b>Genero</b>";
    
}