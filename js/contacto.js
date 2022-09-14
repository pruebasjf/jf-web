import {copyRigth} from "../js/app.js" 
copyRigth()

let fecha = new Date;
let copy = document.querySelector(".footer-copy h2");


copy.innerHTML=fecha.getFullYear() + ` TOYOTA JORGE FERRO - CONCESIONARIO OFICIAL | AV. LIBERTADOR 6777, CABA | TEL: 5299.4000 | REALIZAMOS VENTAS A TODO EL PAIS`;





/// formulario


const enviar = document.getElementById("btnEnviar");

let nombreApellido = document.getElementById("nombre");
let email = document.getElementById("email");
let localidad = document.getElementById("localidad");
let provincia = document.getElementById("provincia");
let telefono = document.getElementById("telefono");
let mensaje = document.getElementById("mensaje");




enviar.addEventListener("click", ()=>{
    const errores = document.getElementById("error")
    let alertas= "";
    let esta = false;
    let reg =/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,4}$/;   
    
  
    if( nombreApellido.value.length === 0){
        alertas += `* Debe ingresar su nombre y apellido <br>`
        esta = true
        
    }
     if(!reg.test(email.value)){
        alertas += `* el email no tiene el formato correcto o se encuentra vacio <br>`
        esta = true
    
    }

    if(localidad.value.length === 0){
        alertas += `* La localidad no puede estar vacio <br>`
        esta = true
      
    }
    if(telefono.value.length === 0 ) {
        alertas += `* Debe ingresar el un numero de teléfono <br>`
        esta = true
  
    }
    if(mensaje.value.length === 0){
        alertas += `* El campo de mensaje se encuentra vacio <br>`
        esta = true
       
    }
    

   errores.innerHTML=alertas



});
