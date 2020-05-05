    
function test1(){
    var obj =new Object; //new Object() - new Object  - {};        
    var p1 = new Persona();
    alert("hola");
}


//un objeto tiene sus propios metodos y el prototype(constructor y metodos propios del papa, y proto de Objet)
//object no tiene ningun metodo propio, todos estan en el proto(ex:toString)

//podemos agregar metodos al objeto o al proto
function Persona(){    
    this.dormir = function(){
    };
}

Persona.prototype.metodo1 = function(){};

//si encuentra un String en Persona no usa el de Object

//Object.toString = function(){} //funcion generica


function Jugador(){
    this.morder = function(){
    };  
    
{
    
Jugador.prototype = Persona.prototype;  //estamos igualando solo el proto, no los metodos propios
    
    
Jugador.prototype = new Persona();   //conseguimos todos los metodos, propios y el proto de Persona, pero perdimos el constructor
    
//para saber la instancia especifica comparamos con el constructor    
//si el objeto.contructor = tipo
    
 Jugador.prototype.constructor = Jugador;    //con esto solucionamos