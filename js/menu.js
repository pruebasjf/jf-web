


export const menu= ()=>{


    const headerSec = document.querySelector(".header-sec");
    const nav = document.createElement("nav");
     nav.classList.add("navbar")

     headerSec.appendChild(nav);
     nav.innerHTML= menuContenido
     
}



const menuContenido =
`<input type="checkbox" id="check">
<label for="check" class="checkbtn">
        <div class="menu-hmg">
            <span></span>
            <span></span>
            <span></span>
        </div>                
</label>

<ul class="sub-menu">
    <li><a class="active" href="modelos">Modelos</a></li>
    <li><a href="toyota-plan-de-ahorro">TOYOTA PLAN</a></li>
    <li><a href="posventa">Posventa</a></li>
    <li><a href="repuestos">Repuestos</a></li>
    <li><a href="kinto">KINTO</a></li>    
    <li class="usados-menu"><a href="javascript:void(0)">Usados</a>
        <ul>
            <li><a href="usados-seleccionados.html">Usados seleccionados</a></li>
            <li><a href="usados-certificacodos-toyota.html">Usados Certificado Toyoya</a></li>
        </ul>
    </li>
</ul>`;




