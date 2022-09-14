


const contenidorPie = `
<section class="footer-contact">
<div class="footer-rrss">
    <a href="https://www.facebook.com/ToyotaJF" target="_blank" rel=”nofollow”><img src="img/icon/facebook-svgrepo-com.svg" alt=""></a>
    <a href="https://www.instagram.com/toyotajorgeferro/" target="_blank" rel=”nofollow”><img src="img/icon/instagram-svgrepo-com.svg" alt=""></a>
    <a href="" target="_blank" rel=”nofollow”><img src="img/icon/youtube-svgrepo-com.svg" alt=""></a>
</div>
<div class="newsletter-conteiner">
    <H2>DEJANOS TU MAIL Y TE ENVIAREMOS NUESTRAS NOVEDADES</h2>
    <p>Recibí noticias, ofertas exclusicas, descuentos y promociones directamente a tu correo electrónico.</p>
    <form action="" autocomplete="off">
        <input type="email" name="Email" id="input-mail" placeholder="Ingrese su correo electronico" >
        <button>SUSCRIBIRSE!</button>
    </form>
    
</div>
<div class="btn-wp-conteiner">
    
    <div class="btn-wp">
        <h2 id="btn-wp-tpa">PLAN DE AHORRO</h2>
        <a href="https://api.whatsapp.com/send?phone=541130488400"> 
            <img src="./img/icon/whatsaap-logo-blanco.png" alt="">11.3048.8400</a>
    </div>
    <div class="btn-wp">
        <h2 id="btn-wp-0km">0KM</h2>
        <a href="https://api.whatsapp.com/send?phone=541130488394">
            <img src="./img/icon/whatsaap-logo-blanco.png" alt="">11.3048.8394</a>
    </div>
    <div class="btn-wp">    
                <h2 id="btn-wp-posventa">Posventa</h2>
            <a href="https://api.whatsapp.com/send?phone=541125563335">
                <img src="./img/icon/whatsaap-logo-blanco.png" alt="">11.2556.3335</a>   
    </div>
</div>
</section>
<section class="footer-second">
    <div class="footer-accesos">
        <h2>Accesos</h2>
        <ul>
            <li><a href="posventa.html">Posventa</a></li>
            <li><a href="repuestos.html">Repuestos Originales</a></li>
            <li><a href="test-drive.html" >Solicitá un Test Drive!</a></li>
            <li><a href="formulario-uif.html" >Formulario UIF</a></li>
            <li><a href="financiacion.html">Financiación - TCFAutos</a></li>
            <li><a href="seguridad.html">Seguridad</a></li>
            <li><a href="institucional.html">Institucional</a></li>
        </ul>
    </div>
    <div class="footer-accesos">
        <h2>Modelos</h2>
        <ul>
            <li><a href="modelos/etios.html">Etios</a></li>
            <li><a href="modelos/yaris.html">Yaris</a></li>
            <li><a href="modelos/nuevo-corolla.html">Nuevo Corolla</a></li>
            <li><a href="modelos/corolla-cross.html">Corolla Cross</a></li>
            <li><a href="modelos/c-hr.html">C-HR</a></li>
            <li><a href="modelos/hilux.html">HILUX</a></li>
            <li><a href="modelos/sw4.html">SW4</a></li>
            <li><a href="modelos/rav4.html">RAV4</a></li>
            <li><a href="modelos/hiace.html">HIACE</a></li>
            <li><a href="modelos/land-cruiser-prado.html">Land Cruiser Prado</a></li>
            <li><a href="modelos/land-cruiser-200.html">Land Cruiser 200</a></li>
        </ul>
    </div>
    <div class="footer-suc">
        <div class="ventas-footer">
            <h2>Ventas</h2>
             <img src="img/frente-concesionario.webp" alt="">
            <ul>
                <li><strong>Dirección:</strong></li>
                <li>Av. del Libertador 6777 <br>
                    C1429BMA / Bs. As., Argentina</li>
                <li><a href="tel:+549115299400"><img src="./img/icon/phone-svgrepo-com.svg" alt=""> 11.5299.4000</a></li>
                <li>int n° 000</li>
            </ul>
        </div>
        <div class="posventa-footer">
            <h2>Servicio Posventa</h2>
            <img src="img/frente-posventa.webp" alt="">
            <ul>
                <li><strong>Dirección:</strong></li>
             
                <li>Quesada 1965 <br>C1429CNI / Bs. As., Argentina </li>
                <li> <a href="tel:+5491152994000"> <img src="./img/icon/phone-svgrepo-com.svg" alt=""> 11.5299.4000</a></li>
                <li>int n° 000</li>
            </ul>
        </div>

    </div>
    
</section>
<section class="footer-copy">
<h2> Toyota Jorge Ferro - Concesionario oficial</h2>
</section>`;


function cargaFooter(){
    const body = document.querySelector("body");
    let footer = document.createElement("footer")
    body.appendChild(footer)

    footer.innerHTML=contenidorPie


    contenidorPie
}
cargaFooter()