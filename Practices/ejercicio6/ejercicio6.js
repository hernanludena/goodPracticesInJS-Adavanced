var cuentas = [];

function agregar() {

    //crear siempre un objetos localmente, sin funciones constructoras
    var cuenta = {
        num_cuenta: document.p.num_cuenta.value,
        saldo: parseInt(document.p.saldo.value),
        propietario: document.p.propietario.value,
        depositar:function(monto){
                this.saldo += parseInt(monto);
        } 
    };
    
    //podemos crear metodos fuera de la creacion  del objeto
    cuenta.retirar = function(monto){
        if(this.saldo >= monto){                 
            this.saldo -= parseInt(monto);
        }else{
            alert("Saldo insuficiente");
        }
    }    
   /* var cuenta = {  //segunda forma para invocar atributos
        num_cuenta: "",
        saldo: "",
        propietario: "
    }
    cuenta.num_cuenta = document.p.num_cuenta.value;
    cuenta.saldo = document.p.saldo.value;
    cuenta.propietario = document.p.propietario.value;
    */
    cuentas.push(cuenta);
    
    //clean
    document.p.num_cuenta.value = "";
    document.p.saldo.value = "";
    document.p.propietario.value = "";
}

function buscar(num_cuenta){
    //retorna la cuenta
   /* for(var i=0;i<cuentas.length;i++) //for simple
    {
        if(cuentas[i].num_cuenta==num_cuenta){
                return cuentas[i];    
                break;
        }        
    }*/
    
    var c;
    cuentas.forEach(function(cuenta){  //foreach
        if (cuenta.num_cuenta == num_cuenta){
            c= cuenta;
            return;  //usamos return en lugar de break
        } 
    }); 
    return c; 
    
}

function depositar(){
    var c1 = buscar(document.p.num_cuenta2.value);   
    
    if(c1!= null){
        c1.depositar(document.p.monto.value);
        
        var cadena=""; 
         cuentas.forEach(function(c){
       cadena+= "Cuenta:"+c.num_cuenta+" Propietario:" +c.propietario + " Saldo:" + c.saldo+ '\n';  
        });
        
    document.p.ta_cuentas.value =cadena; 
        
    }else{
        alert("cuenta no existe");
    }
  
}

function retirar(){
    var c1 = buscar(document.p.num_cuenta2.value);   
    
    if(c1!= null){
        c1.retirar(document.p.monto.value);
        
        var cadena="";
    cuentas.forEach(function(c){
        cadena+= "Cuenta:"+c["num_cuenta"]+" Propietario:" +c["propietario"] + " Saldo:" + c["saldo"] + '\n'; 
      });   
    //2da forma para llamar atributos    
                
    document.p.ta_cuentas.value =cadena; 
        
    }else{
        alert("cuenta no existe");
    }    
}





