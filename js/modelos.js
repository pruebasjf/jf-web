import { copyRigth } from "../js/app.js";
copyRigth()

const siguiente = document.getElementById("btn-galeria");
let imgGaleria= document.getElementById("galeria-img");    

const listas = document.querySelectorAll(".galeria li");
const modalOpen= document.querySelector(".modal-galery")
const cerrarModal= document.getElementById("cerrar-js")  
let contador=1;


listas.forEach((element)=>{ element.addEventListener("click", ()=>{
    
    let clase = element.className

    modalOpen.classList.toggle("modal-galery-js")
    
    switch (clase){
        case "pic-1":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/1.webp"
             break;
        case "pic-2":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/2.webp"
            break;
        case "pic-3":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/3.webp"
            break;
        case "pic-4":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/4.webp"
            break;
        case "pic-5":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/5.webp"
            break;
        case "pic-6":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/6.webp"
            break;
        case "pic-7":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/7.webp"
            break;
        case "pic-8":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/8.webp"
            break;
        case "pic-9":
            console.log("hiciste click en " + clase)
            imgGaleria.src="../img/modelos/galeria/etios/9.webp"
            break;
    }
    
})});


siguiente.addEventListener("click", ()=>{
    let ruta="";
    ruta = `../img/modelos/galeria/etios/${contador}.webp`
        contador++;
        imgGaleria.src=ruta
    
    switch(contador){
        
        case 1:
            imgGaleria.src=contador++
            console.log(contador)
            break;
        case 10:
            console.log("10")
            contador=1
            imgGaleria.src=ruta

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
    contador=1;
    
    let clase = element.className
    
    element.addEventListener("click",()=>{
       let imgColor = document.getElementById("img-color")
        
        switch (clase){
            case "color-1":
                imgColor.src="../img/modelos/colores/etios/Etios-Blanco-1024x768.webp";
                break;
            case "color-2":
                imgColor.src="../img/modelos/colores/etios/Etios-Blanco-Perlado-1024x768.webp";
                break;
            case "color-3":
                imgColor.src="../img/modelos/colores/etios/Etios-Gris-Plata-1024x768.webp"
                break;
            case "color-4":
                imgColor.src="../img/modelos/colores/etios/Etios-Gris-Oscuro-1024x768.webp"
                break
            case "color-5":
                imgColor.src="../img/modelos/colores/etios/Etios-Negro-1024x768.webp"
                break
            case "color-6":
                imgColor.src="../img/modelos/colores/etios/Etios-Rojo-1024x768.webp"
                break
        }

    })



})