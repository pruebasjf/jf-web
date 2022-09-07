import { copyRigth } from "../js/app.js"; // agrega el texto al copyrigth en footer
copyRigth()

const listas = document.querySelectorAll(".galeria li");
const modalOpen= document.querySelector(".modal-galery")
const cerrarModal= document.getElementById("cerrar-js")  
const modelo =document.querySelector("[data-modelo]").dataset.modelo;
const imgGaleria= document.getElementById("galeria-img");    

let contador=1;


console.log(modelo)



listas.forEach((element)=>{ element.addEventListener("click", ()=>{
    let clase = element.className
    modalOpen.classList.toggle("modal-galery-js")
   
    switch (clase){
        case "pic-1":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/1.webp`
             break;
        case "pic-2":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/2.webp`
            break;
        case "pic-3":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/3.webp`
            break;
        case "pic-4":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/4.webp`
            break;
        case "pic-5":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/5.webp`
            break;
        case "pic-6":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/6.webp`
            break;
        case "pic-7":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/7.webp`
            break;
        case "pic-8":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/8.webp`
            break;
        case "pic-9":
            console.log("hiciste click en " + clase)
            imgGaleria.src=`../img/modelos/galeria/${modelo}/9.webp`
            break;
           
    }
    
})});



const siguiente = document.getElementById("btn-galeria");

siguiente.addEventListener("click", ()=>{
   contador++
    let ruta = `../img/modelos/galeria/${modelo}/${contador}.webp`
    imgGaleria.src=ruta

    switch(contador){
        
        case 1:
            imgGaleria.src=contador++
            console.log(contador)
           
        case 10:
            console.log("10")
            contador=1
            imgGaleria.src=`../img/modelos/galeria/${modelo}/${contador}.webp`;

        }    
})


cerrarModal.addEventListener("click",()=>{
    modalOpen.classList.toggle("modal-galery-js")
})


document.addEventListener("keyup",(event)=>{
    let esc = event.code;

    if(modalOpen.classList.className = "modal-galery-js"){
        modalOpen.classList.remove("modal-galery-js")
    }else{
        return
    }
})

const colorSelector = document.querySelectorAll(".colores-selector li")


colorSelector.forEach(element=>{
    let clase = element.className
    element.addEventListener("click",()=>{
        let imgColor = document.getElementById("img-color")
        let infoColor = document.getElementById("color-selector")
        contador=1;
        switch (clase){
            case "color-1":
                imgColor.src="../img/modelos/colores/etios/Etios-Blanco-1024x768.webp";
                infoColor.innerHTML=`Color Seleccionado: <br> <span>BLANCO</span>`;
                break;
            case "color-2":
                imgColor.src="../img/modelos/colores/etios/Etios-Blanco-Perlado-1024x768.webp";
                infoColor.innerHTML=`Color Seleccionado: <br> <span>BLANCO PERLADO</span>`;
                break;
            case "color-3":
                imgColor.src="../img/modelos/colores/etios/Etios-Gris-Plata-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>GRIS PLATA</span>`;
                break;
            case "color-4":
                imgColor.src="../img/modelos/colores/etios/Etios-Gris-Oscuro-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>GRIS OSCURO</span>`;
                break
            case "color-5":
                imgColor.src="../img/modelos/colores/etios/Etios-Negro-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>NEGRO</span>`;
                break
            case "color-6":
                imgColor.src="../img/modelos/colores/etios/Etios-Rojo-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>ROJO</span>`;
                break;
            case "color-7":
                //************************  YARIS  *****************************************
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Blanco-040-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>BLANCO</span>`;
                break;
            case "color-8":
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Blanco-Perlado-089-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>BLANCO PERLADO</span>`;
                break;
            case "color-9":
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Gris-Azulado-8V5-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>GRIS AZULADO</span>`;
                break;
            case "color-10":
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Gris-Oscuro-Metalizado-1G3-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>GRIS OSCURO METALIZADO</span>`;
                break;
            case "color-11":
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Negro-Mica-215-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>NEGRO</span>`;
                break;
            case "color-12":
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Rojo-3R3-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>ROJO</span>`;
                break;
            case "color-13":
                imgColor.src="../img/modelos/colores/yaris/Toyota-Yaris-Gris-Plata-Metalizado-1H6-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br> <span>GRIS PLATA</span>`;
                break;
              //************************  NUEVO COROLLA  *****************************************
            case "color-14":
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Super-Blanco-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>SUPER BLANCO</span>`;
                break;
            case "color-15": 
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Blanco-Perlado-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>BLANCO PERLADO</span>`;
                break;
            case "color-16": 
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Gris-Azulado-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS AZULADO</span>`;
                break;
            case "color-17": 
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Gris-Oscuro-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS OSCURO METALIZADO</span>`;
                break;
            case "color-18": 
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Negro-Mica-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>NEGRO</span>`;
                break
            case "color-19": 
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Rojo-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>ROJO</span>`;
                break
            case "color-20": 
                imgColor.src="../img/modelos/colores/nuevo-corolla/Toyota-Corolla-Gris-Plata-1024x768.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS PLATA</span>`;
                break
            //************************  COROLLA CROSS  *****************************************
            case "color-21": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-SUPER-WHITE_L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>BLANCO</span>`;
                break;
            case "color-22": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-WHITE-PEARL-L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>BLANCO PERLADO</span>`;
                break;
            case "color-23": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-SILVER-L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>PLATEADO</span>`;
                break;
            case "color-24": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-DARK-GREY-L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS OSCURO</span>`;
                break;  
            case "color-25": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-BLACK-L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>NEGRO</span>`;
                break;   
            case "color-26": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-RED-L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>ROJO</span>`;
                break; 
            case "color-27": 
                imgColor.src="../img/modelos/colores/corolla-cross/SEG-METALLIC-BLUE-L-1024x724.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>AZUL METALICO</span>`;
                break;  
             //************************  C-HR  *****************************************
             case "color-28": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-blanco.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>BLANCO</span>`;
                break;  
            case "color-29": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-blanco-perlado.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>BLANCO PERLADO</span>`;
                break;
            case "color-30": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-gris-plata-metalizado.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS PLATA METALIZADO</span>`;
                break; 
            case "color-31": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-Gris-oscuro-metalizado.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS OSCURO METALIZADO</span>`;
                break;
            case "color-32": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-gris-azulado.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>GRIS AZULADO</span>`;
                break; 
            case "color-33": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-rojo.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>ROJO</span>`;
                break;
            case "color-34": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-negro.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>NEGRO</span>`;
                break;
            case "color-35": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-azul-metalizado.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>AZUL METALIZADO</span>`;
                break;
            case "color-36": 
                imgColor.src="../img/modelos/colores/c-hr/c-hr-naranja.webp"
                infoColor.innerHTML=`Color Seleccionado: <br><span>NARANJA</span>`;
                break;

        }
    })
})



