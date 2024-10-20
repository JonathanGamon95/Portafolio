const ABRIR_MENU_MOBILE = document.getElementById("boton_abri_menu_mobile")
const CERRAR_MENU_MOBILE = document.getElementById("boton_menu_mobile_cerrar");


//ventana menu
const CONT_MENU_EXTERIOR = document.getElementById("cont_menu_mobile_externo")
const CONT_MENU_INTERIOR = document.getElementById("cont_menu_mobile_interno")


const abrirMenu = () => {
    CONT_MENU_EXTERIOR.style.visibility = "visible"
    CONT_MENU_INTERIOR.style.transform = "translateY(0%)";
}

const cerrarMenu = () => {
    CONT_MENU_INTERIOR.style.transform = "translateY(-100%)";
    CONT_MENU_EXTERIOR.style.visibility = "hidden"
}

ABRIR_MENU_MOBILE.addEventListener("click", abrirMenu)
CERRAR_MENU_MOBILE.addEventListener("click", cerrarMenu)