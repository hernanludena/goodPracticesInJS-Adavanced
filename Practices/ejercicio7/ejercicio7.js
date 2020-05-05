var cuentas = [];

//creacion de objetos con funciones constructoras
function Cuenta(num_cuenta,saldo,propietario){
    this.num_cuenta = num_cuenta;
    this.saldo = parseInt(saldo);
    this.propietario = propietario;
    this.depositar = function(monto){
                this.saldo += parseInt(monto);
    }; 
         
}
function agregar() {    
    var c1=new Cuenta(document.p.num_cuenta.value,
                        document.p.saldo.value,
                       document.p.propietario.value);   
    cuentas.push(c1);
}

function buscar(num_cuenta){
    //retorna la cuenta
   /* for(var i=0;i<cuentas.length;i++)
    {
        if(cuentas[i].num_cuenta==num_cuenta){
                return cuentas[i];    
                break;
        }        
    }*/
    
    var c;
    cuentas.forEach(function(cuenta){
        if (cuenta.num_cuenta == num_cuenta){
            c= cuenta;
            return;
        } 
    }); 
    return c; 
   
}

//depositar
//-------------------------------------------------
function depositar(){
    var c1 = buscar(document.p.num_cuenta2.value);   
    
    if(c1!= null){
        c1.depositar(document.p.monto.value);
        
        var cadena="";      
       //cadena+= "Cuenta:"+c1.num_cuenta+" Propietario:" +c1.propietario + " Saldo:" + c1.saldo;  
  
    cuentas.forEach(function(c){
        cadena+= "Cuenta:"+c["num_cuenta"]+" Propietario:" +c["propietario"] + " Saldo:" + c["saldo"] + '\n'; 
      });   //podemos invocar los atributos con esta otra forma
        
        
    document.p.ta_cuentas.value =cadena; 
        
    }else{
        alert("cuenta no existe");
    }    
}
//-------------------------------------------------


//retirar
//-------------------------------------------------
//metodo agregado al proto
Cuenta.prototype.retirar = function(monto){
    if(this.saldo >= monto){                 
        this.saldo -= parseInt(monto);
    }else{
        alert("Saldo insuficiente");
    }
}; 

function retirar(){
    var c1 = buscar(document.p.num_cuenta2.value);   
    
    if(c1!= null){
        c1.retirar(document.p.monto.value);
        
        var cadena="";
    cuentas.forEach(function(c){
        cadena+= "Cuenta:"+c["num_cuenta"]+" Propietario:" +c["propietario"] + " Saldo:" + c["saldo"] + '\n'; 
      });   
                
    document.p.ta_cuentas.value =cadena; 
        
    }else{
        alert("cuenta no existe");
    }    
}
//-------------------------------------------------




