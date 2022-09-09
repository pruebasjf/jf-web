console.log("testDrive")
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const localidad = document.getElementById("localidad");
const provincia = document.getElementById("provincia");
const modelos = document.getElementById("modelos");
const mensaje = document.getElementById("mensaje");
const enviar = document.getElementById("td-enviar");


enviar.disabled= true

const formulario = document.querySelector(".formulario-td");


formulario.addEventListener("click", (event)=>{
    event.preventDefault()
    modelos.addEventListener("change",(e)=>{
         let modelo =e.target.value
      console.log(modelo)

     if(e.target.value.length > 3){
        console.log("modelo es true")
        enviar.disabled= false
     }else{
        console.log("modelo es false")
     }
    })
   

    
})
