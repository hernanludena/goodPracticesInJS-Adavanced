var clientes = [];

//creacion de objetos con funcion constructora
function Cliente(cedula,nombre,apellido){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    //tenemos que inicializar los obejtos antes de asignarles atributos o metodos
    //this.direccion = {};   //inicializacion valido
    this.direccion = new Object();   //inicializacion valido
    /*this.direccion = {   //inicializacion valido
        calleP: "",
        calleS: "",
        numero: "",
    };*/  
}

function agregar() {    
     var cliente1=new Cliente(document.p.cedula.value,
                        document.p.nombre.value,
                       document.p.apellido.value);     
    
    //cliente1.direccion = {};  //primero se debe crear el objeto, desde aqui o en el constructor
    //luego de inicializar el objeto podemos agregarles metodos y atributos dinamicamente
    cliente1.direccion.calleP=document.p.calleP.value;
    cliente1.direccion.calleS=document.p.calleS.value;
    cliente1.direccion.numero=document.p.numero.value;
         
    /*c1.direccion.calleP = document.p.calleP.value;
    c1.direccion.calleS = document.p.calleS.value;
    c1.direccion.numero = document.p.numero.value;*/
    
    clientes.push(c1);
}

//------------------------------------------------------
//forma 2
function Cliente(cedula,nombre,apellido,direccion){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    
    //no es constructor es metodo
    /*this.direccion = function(calleP,calleS,numero){
        this.calleP = calleP;
        this.calleS = calleS;
        this.numero = numero;
    };*/

}

function Direccion(calleP,calleS,numero){
        this.calleP = calleP;
        this.calleS = calleS;
        this.numero = numero;
    };

function agregar() { 
   /* var dir=new direccion(document.p.calleP.value,
                        document.p.calleS.value,
                       document.p.numero.value                       );  */
    
     var c1=new Cliente(document.p.cedula.value,
                        document.p.nombre.value,
                       document.p.apellido.value);  
    
     c1.direccion = new Direccion(document.p.calleP.value,
                        document.p.calleS.value,
                       document.p.numero.value); 
     cuentas.push(c1);
}


//------------------------------------------------------
//forma 3
function Cliente(cedula,nombre,apellido,direccion,calleP,calleS,numero){
    this.cedula = cedula;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = {
        this.calleP = calleP;
        this.calleS = calleS;
        this.numero = numero;
    };

}


