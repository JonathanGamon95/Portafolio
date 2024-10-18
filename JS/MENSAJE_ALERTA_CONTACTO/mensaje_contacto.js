const boton_whatApp = document.querySelectorAll(".whatApp");
const BOTON_GMAIL = document.querySelectorAll(".correo");


const CONT_VENTANA_CONTACTO = document.getElementById("cont_ventana_contactos");
const VENTANA_CONTACTO = document.getElementById("ventana_contacto");


const MOSTRAR_MENSAJE = (mensaje) => {
    activador = 1;
    VENTANA_CONTACTO.textContent = "";
    VENTANA_CONTACTO.textContent = mensaje;
    VENTANA_CONTACTO.classList.add("mensaje_mostrado");

    setTimeout(() => {
        VENTANA_CONTACTO.classList.remove("mensaje_mostrado");
        activador = 0;
    }, 2000);
}



let activador = 0;
boton_whatApp.forEach((boton) => {
    const mensaje = "1159541014";

    boton.addEventListener("click", () => {
        if (activador === 0) {
            MOSTRAR_MENSAJE(mensaje);
        }
    });
});




BOTON_GMAIL.forEach((boton) => {
    const mensaje = "jonathaneg51995@gmail.com";

    boton.addEventListener("click", () => {
        if (activador === 0) {
            MOSTRAR_MENSAJE(mensaje);
        }
    });
});