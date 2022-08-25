
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
   // if (contador <= 9){
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

//cerrarModal.addEventListener("keyup",()=>{
 //   let esc = event.keyCode;
  //  if(esc = 27){
 //       modalOpen.classList.toggle("modal-galery-js")
 //       console.log("escape")
 //   }
//
//})


//window.addEventListener("keydown",(event)=>{
   // console.log(event)
//})