//creacion de objetos sin funciones constructoras
var p1 = {
    nombre:"hernan",
    apellido:"ludena",
    saludar:function(){
            return "hola"+" "+this.nombre+" "+this.apellido;
    } 
};
    
  
function test1(){ 
    alert(p1.nombre);  
    alert(p1.saludar());  
}


function test2(){    
    p1.edad = 30;  //agregamos dinamicamente atributo
    p1.crecer = function(){ //agregamos dinamicamente metodo 
        return "crezco";       
    };    
    
    alert(p1.edad);  
    alert(p1.crecer());
}

function test3(){     
    var p3 = p1; //no se crea objeto, se referencia al mismo objeto p1
    p3.nombre = "juan";  //tambien se cambia p1 
    alert(p1.nombre);  //juan
    alert(p3.nombre);  //juan
    
    
    //debo ejecutar el test2 para que se agreguen los nuevos metodos dinamicamente, y no salga el error de metodo no existe.
    alert(p3.crecer()); //Uncaught TypeError: Object #<Object> has no method 'crecer'
    
    
    
}

    
