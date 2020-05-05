function comparacion(valor1,valor2){
    if (valor1 == valor2){
        alert("iguales con ==");
    }else{
        alert("diferentes ==");
    }


    if (valor1 === valor2){
        alert("iguales con ===");
    }else{
        alert("diferentes ===");
    }
    
}
    
function test1(){
        var x =0;
        var y ="0";
    comparacion(x,y); //iguales == , hace una conversion y compara
                    //diferentes ===  compara con tipo de datos
}


function test2(){
        var x;  //undefined  -variable no toma valor
        var y = null;  //valor explicito
    comparacion(x,y); //diferentes ===
}

function test3(){
        var x = {nombre:"Hernan"};  
        var y = {nombre:"Hernan"};  
    comparacion(x,y);   //compara referencias  diferentes == y diferentes ===
}


function test4(){
        var x = true;  
        var y = 1;    //transforma en boolean 1 o "1"
    comparacion(x,y);   //iguales == y diferentes ===
}

//== convierte y los compara
//=== compara tipos de datos