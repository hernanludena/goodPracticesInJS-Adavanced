var bar = {
    nombre:"hernan",
    direccion:"neverland",
    limpiar:function(){
                alert("limpiar");
    } 
};

function clonar(objeto){
    function auxiliar(){        
    };    
    auxiliar.prototype = objeto;
    return auxiliar;
}

function test1(){     
    
    var nuevoBar = clonar(bar);
    nuevoBar.nombre = "Juan";
    alert(bar.nombre);
    alert(nuevoBar.nombre);
    
}



