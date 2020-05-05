function Persona(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.saludar = function(){
        return "hola"+" "+this.nombre+" "+this.apellido;
    };
}



function test1(){
    var p1 = new Persona("Hernan","Ludena"); 
    alert(p1.saludar());  
}



function test2(){
    var p2 = new Persona("Hernan","Ludena"); 
    //podemos agregar atributos y funciones dinamicas
    p2.edad = 30;  //atributo solo pertenece a este objeto
    p2.crecer = function(){ //funcion solo pertenece a este objeto
        //alert("hola");
        return "hola";
        //undefined si no retorna nada
    };
    alert(p2.edad);  
    alert(p2.crecer());  
}



  