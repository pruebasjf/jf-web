import {copyRigth} from "../js/app.js"
copyRigth()

const select = document.querySelector("#selectAutos");

select.addEventListener("change", (e)=>{
    let valor = e.target.value
    let autos= document.querySelectorAll("#autos")
    let suv = document.querySelectorAll("#suv")
    let todos = document.querySelectorAll(".caja")

    if(valor == "autos"){
        autos.forEach((elements) =>{
          if(elements.style.display == "none")
            elements.style.opacity="1"
            setTimeout( ()=>{elements.style.display="flex"},210)

        })

        suv.forEach((elements) =>{
          
            elements.style.opacity="0"
            setTimeout( ()=>{elements.style.display="none"},210)
        })



    }else if(valor == "suv"){

        suv.forEach((elements) =>{
           
          if(elements.style.display == "none")
            elements.style.opacity="1"
            setTimeout( ()=>{elements.style.display="flex"},210)

        })
       
        autos.forEach((elements) =>{
                
            elements.style.opacity="0"
            setTimeout( ()=>{elements.style.display="none"},210)

        })

    }

    else if(valor == "todos"){

        todos.forEach((elements) =>{
         
            elements.style.display="flex"
            setTimeout( ()=>{elements.style.opacity="1"},10)
            
        })
    }
    

})