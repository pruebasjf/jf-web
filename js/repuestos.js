import {copyRigth} from "../js/app.js"

copyRigth()


    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const localidad = document.getElementById("localidad").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const modelos = document.getElementById("modelos").value;
    const numChasis = document.getElementById("NumChasis").value;
    const año = document.getElementById("año").value;
    const mensaje = document.getElementById("mensaje").value;


    const  enviar = document.querySelector(".enviar");

enviar.addEventListener("click", (event)=>{
    const formulario = document.querySelector(".forms-repuestos")
    const errores = document.getElementById("error")
    let alertas= "";
    let esta = false;
    let reg =/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,4}$/;   
    
    
    if( nombre.length === 0){
        alertas += `* Debe ingresar su nombre <br>`
        esta = true
        
    }
    if( apellido.length === 0){
        alertas += `* Debe ingresar su apellido <br>`
        esta = true
        
    }
    
    if(!reg.test(email)){
        alertas += `* El email no tiene el formato correcto o se encuentra vacio <br>`
        esta = true
        
    }
    
    if(localidad.length === 0){
        alertas += `* La localidad no puede estar vacio <br>`
        esta = true
        
    }
    if(telefono.length === 0 ) {
        alertas += `* Debe ingresar el un numero de teléfono <br>`
        esta = true
        
    }
    if(numChasis.length === 0 ) {
        alertas += `* Debe ingresar el un numero de Chasis <br>`
        esta = true
        
    }
    if(año.length === 0 ) {
        alertas += `* Debe ingresar el año <br>`
        esta = true
        
    }
    
   
    if(mensaje.length === 0){
        alertas += `* El campo de mensaje se encuentra vacio <br>`
        esta = true
        
    }

    if (esta){
        errores.innerHTML=alertas
    }else{
        errores.innerHTML="enviado"
    }

    formulario.reset()
   
    

})






