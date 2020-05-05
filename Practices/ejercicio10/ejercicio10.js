var clientes = [];

//creacion de objetos con funcion constructora
function Cliente(cedula,nombre,apellido){
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
        /*return "cedula: "+this.cedula+
               " nombre: "+this.nombre+
               " apellido: "+this.apellido+
               " genero: "+this.genero+
               " direccion: "+this.direccion;*/
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
    
    
    
}

function agregar() {    
     var cliente1=new Cliente(document.p.cedula.value,
                        document.p.nombre.value,
                       document.p.apellido.value);    

    //una vez creado el objeto podemos asignarle atributos dinamicamente
    cliente1.direccion.calleP=document.p.calleP.value;
    cliente1.direccion.calleS=document.p.calleS.value;
    cliente1.direccion.numero=document.p.numero.value;
    cliente1.genero = document.p.sel_genero.value;
    
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

