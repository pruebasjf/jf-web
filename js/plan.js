const suscribirse = document.getElementById("suscribirse");


suscribirse.addEventListener("click",()=>{
console.log("click")
    fetch("./php/tpa_api.php")
    .then(res => res.json())
       
    
    .then(data => p.innerHTML=JSON.stringify(data))
    .catch(error => console.log("Ocurrior un rerror :", error))
    
    
    

})