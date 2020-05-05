function Persona(nombre,apellido){
    this.nombre = nombre; //incluir el this
    this.apellido = apellido;
    
    if(this instanceof Persona){  //this -->intancia del objeto creado
        alert("instancia de Persona");
        
    }else if(this instanceof Window){
        alert("instancia de Window");
    }
    
}
function test1(){
    var p1 = new Persona("Hernan","Ludena"); 
    alert(p1.nombre+" "+p1.apellido);  //Object
    //se crea objeto
}

function test2(){
    var p2 = Persona("Hernan","Ludena");  //se comporta como funcion //Se imprime "instancia de Window";
    alert(window.nombre); //Hernan
    
    
    //this.nombre y this.apellido pasan a formar variables globales y no son parte de un Objeto Persona y ahora forman parte del objeto Window; xq no se uso el NEW
    
    alert(nombre);  //Hernan --->pasan a ser variables globales
    
    alert(p2.nombre);  //undefined
}

//window  --->Window
//referencia ---->Objeto


  