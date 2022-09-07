import { copyRigth } from "./app.js";

const btnTpa= document.getElementById("btn-tpa");
const testDrive =document.getElementById("test-drive");

const btnPosventaWp = document.getElementById("btn-wp-posventa");
const btn0kmWp = document.getElementById("btn-wp-0km");
const btnTpaWp= document.getElementById("btn-wp-tpa")


copyRigth()

btnPosventaWp.addEventListener("click",()=>{window.open("https://api.whatsapp.com/send?phone=541125563335")});

btn0kmWp.addEventListener("click",()=>{window.open("https://api.whatsapp.com/send?phone=541130488394")});

btnTpaWp.addEventListener("click",()=>{window.open("https://api.whatsapp.com/send?phone=541130488400")});


function maps(){
    let map = document.querySelector(".maps");
    let iframe =document.createElement("iframe");
    iframe.setAttribute("title","google-maps")
    map.appendChild(iframe);
    iframe.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6572.215485958402!2d-58.46045843213955!3d-34.55082731701101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb42fbc1d095d%3A0x572d19716eda196!2sToyota%20Jorge%20Ferro%20-%20Concesionario%20Oficial!5e0!3m2!1ses!2sar!4v1658925991733!5m2!1ses!2sar";
}
maps()




//let fecha = new Date;

//let copy = document.querySelector(".footer-copy h2");


//copy.innerHTML=fecha.getFullYear() + ` TOYOTA JORGE FERRO - CONCESIONARIO OFICIAL | AV. LIBERTADOR 6777, CABA | TEL: 5299.4000 | REALIZAMOS VENTAS A TODO EL PAIS`;


//hover nuevo Corolla



const nuevoCorolla = document.querySelector(".corollaN img");

let img = document.querySelector(".corollaN img");

nuevoCorolla.addEventListener("mouseover",(img)=>{     
    img.target.src="img/modelos/nuevo-corolla-frente.webp";
},false);


nuevoCorolla.addEventListener("mouseout",(img)=>{    
    img.target.src="img/modelos/nuevo-corolla.webp";

},false);



// control del carrusel
const modelosContenedor = document.getElementById("modelo-contenedor");

let click = 0;

const btnDerecha = document.getElementById("btn-derecha");
const btnIzquierdo = document.getElementById("btn-izquierdo");

function mover (click){
    modelosContenedor.scrollTo(click,0)
}



btnIzquierdo.addEventListener("click", ()=>{
    click = click - 800;
   mover(click)

   if(click == 0){
        click = 8057;
        mover(click)
    }

})

btnDerecha.addEventListener("click", ()=>{
    click = click + 700
    
      mover(click)

    if( click >= 8057){
        click =0;
        mover(click)
    }

})






