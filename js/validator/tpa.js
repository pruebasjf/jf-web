import {copyRigth} from "../app.js"

copyRigth()


function banner(){
    const tpaBanner =document.getElementById("tpa-banner");
    tpaBanner.classList.add("tpa-banner")
}

setTimeout(banner,300);