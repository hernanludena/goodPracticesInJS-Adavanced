var clientes = [];
var telefonos = [];

//creacion de objetos con funcion constructora
function Cliente(cedula,nombre,apellido,telefonos){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    //this.direccion = {};   //valido
    this.direccion = new Object();   //valido
    this.genero = "";
    this.toString = function(){
        var cadena= "";
        for(atributo in this){
            if(!(this[atributo] instanceof Function)){
                 cadena+=atributo+ ": " + this[atributo]+" ";                   //imprime atributos y metodos
            }           
        }
        return cadena;            
     
    }
    
    this.direccion.toString = function(){
        var cadena= "";
        for(atributo in this){
            if(!(this[atributo] instanceof Function)){
                 cadena+=atributo+ ": " + this[atributo]+" ";                   //imprime atributos y metodos
            }           
        }
        return cadena; 
    } 
    this.telefonos = telefonos;
    
    this.telefonos.toString = function(){
        var cadena= "";       
        for(var i=0;i<telefonos.length;i++)
        {
            cadena+= "Telefono: "+telefonos[i].numeroT+ " "+ 
                telefonos[i].operadora+ " "+
                telefonos[i].tipo + " ";
        }   
        
        return cadena; 
    } 

}

function Telefono(numeroT,tipo,operadora){
    this.numeroT = numeroT;
    this.tipo = tipo;
    this.operadora = operadora;
}

function agregarTelefono(){
    var t1 = {
        numeroT: document.p.numeroT.value,
        tipo: document.p.sel_tipo.value,
        operadora: document.p.sel_operadora.value        
     };
    telefonos.push(t1);     
    
}



function agregar() {    
     var cliente1=new Cliente(document.p.cedula.value,
                        document.p.nombre.value,
                       document.p.apellido.value,
                             telefonos);    

    //una vez creado el objeto podemos asignarle atributos dinamicamente
    cliente1.direccion.calleP=document.p.calleP.value;
    cliente1.direccion.calleS=document.p.calleS.value;
    cliente1.direccion.numero=document.p.numero.value;
    cliente1.genero = document.p.sel_genero.value;
    //cliente1.telefonos = telefonos;
    
    //cliente1.telefonos
    
 /*   //forma 2
    cliente1.direccion.toString = function(){
        var cadena= "";
        for(atributo in this){
            if(!(this[atributo] instanceof Function)){
                 cadena+=atributo+ ": " + this[atributo]+" ";                   //imprime atributos y metodos
            }           
        }
        return cadena; 
    }*/
    
    
    clientes.push(cliente1);
}

function mostrar(){
    var cadena=""; 
    clientes.forEach(function(c){
        //cadena+= c.toString()+ '\n';  //to String de Cliente
        cadena+= c+ '\n';  //sobreescribe toString de Object       
    });
        
    document.p.clientes.value =cadena;    
  
}

