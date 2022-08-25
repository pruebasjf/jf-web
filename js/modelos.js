
const siguiente = document.getElementById("btn-galeria");
let img= document.getElementById("galeria-img");    

const listas = document.querySelectorAll(".galeria li");
const modalOpen= document.querySelector(".modal-galery")
const cerrarModal= document.getElementById("cerrar-js")  
let contador=1;
let ruta="";


listas.forEach((element)=>{ element.addEventListener("click", ()=>{
    
    let clase = element.className
    ruta =`../img/modelos/galeria/etios/${contador}.webp`
    modalOpen.classList.toggle("modal-galery-js")
    
    switch (clase){
        case "pic-1":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/1.webp"
             break;
        case "pic-2":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/2.webp"
            break;
        case "pic-3":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/3.webp"
            break;
        case "pic-4":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/4.webp"
            break;
        case "pic-5":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/5.webp"
            break;
        case "pic-6":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/6.webp"
            break;
        case "pic-7":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/7.webp"
            break;
        case "pic-8":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/8.webp"
            break;
        case "pic-9":
            console.log("hiciste click en " + clase)
            img.src="../img/modelos/galeria/etios/9.webp"
            break;
    }
    
})});


siguiente.addEventListener("click", ()=>{
    ruta = `../img/modelos/galeria/etios/${contador}.webp`
        contador++;
        img.src=ruta
    
    switch(contador){
        
        case 1:
            img.src=contador++
            console.log(contador)
            break;
        case 10:
            console.log("10")
            contador=1
            img.src=ruta
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
    ruta = `../img/modelos/colores/etios/${contador}-Etios-Blanco-1024x768.png`
    
    let clase = element.className
    console.log(clase)
    
    
    element.addEventListener("click",()=>{
        img = document.getElementById("img-color")
        
        switch (clase){
            case "color-1":
                img.src="../img/modelos/colores/etios/1-Etios-Blanco-1024x768.png";
                break;
            case "color-2":
                img.src="../img/modelos/colores/etios/2-Etios-Blanco-Perlado-1024x768.png";
                break;
            case "color-3":
                img.src="../img/modelos/colores/etios/Etios-Gris-Plata-1024x768.png"
                break;
            case "color-4":
                img.src="../img/modelos/colores/etios/Etios-Gris-Oscuro-1024x768.png"
                break
            case "color-5":
                img.src="../img/modelos/colores/etios/Etios-Negro-1024x768.png"
                break
            case "color-6":
                img.src="../img/modelos/colores/etios/Etios-Rojo-1024x768.png"
                break
        }

    })



})