let fecha = new Date;
let copy = document.querySelector(".footer-copy h2");



export const copyRigth =()=>{
    copy.innerHTML=fecha.getFullYear() + ` TOYOTA JORGE FERRO - CONCESIONARIO OFICIAL | AV. LIBERTADOR 6777, CABA | TEL: 5299.4000 | REALIZAMOS VENTAS A TODO EL PAIS`;

}
