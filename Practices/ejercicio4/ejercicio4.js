//HERENCIA 

function Animal(){ //constructor de Animal
    this.dormir = function(){
        alert("dormir");
    }; 
}

Animal.prototype.jugar = function(){
      alert("jugar");
};

function Perro(){  //constructor de Perro
    this.ladrar = function(){
        alert("ladrar");
    };
}

Perro.prototype = new Animal();  // -->tiene dormir + prototype + el jugar
Perro.prototype.constructor = Perro;

//Perro.prototype = Animal.prototype -->no tiene el dormir

//los metodos propios del objeto no forman parte del prototype


Perro.prototype.morder = function(){
      alert("morder");
};

function test1(){ 
    var a1 =  new Animal();  //proto = Animal
    a1.dormir();
    a1.jugar();   
    //alert(a1.toString()); //metodo del proto   
    
    var p1 = new Perro();
    p1.dormir();
    p1.ladrar();    
}
//un objeto tiene sus metodos mas el prototype, dentro del prototype tengo el constructor mas los metodos del padre.

//el esquema de herencia funciona a traves de modificar el prototype


function test2(){     
    var p2 = new Perro();
    /*
        Perro.prototype = new Animal(); 
        Perro.prototype.constructor = Perro; 
       -- con esto heredamos todos los metodos --
    */
    p2.dormir();
    p2.ladrar();
    p2.jugar();
    p2.morder();
}

function test3(){     
   var p3 = new Perro();
    
    if(p3 instanceof Perro){  
        alert("instancia de Perro");
        
    }
    if(p3 instanceof Animal){
        alert("instancia de Animal");
    }
    
    //p3 es instancia de ambos objetos
    
    
}


