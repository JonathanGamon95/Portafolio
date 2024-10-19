const PORCENTAJE_HTML = document.getElementById("porsentaje_HTML");
const PORCENTAJE_CSS = document.getElementById("porsentaje_CSS");
const PORCENTAJE_JS = document.getElementById("porsentaje_JS");
const PORCENTAJE_REACT = document.getElementById("porsentaje_REACT");

const PORCENTAJE_DISEÑO = document.getElementById("porsentaje_DISEÑO");
const PORCENTAJE_CREATIVIDAD = document.getElementById("porsentaje_CREATIVIDAD");
const PORCENTAJE_TRABAJO_EN_EQUIPO = document.getElementById("porsentaje_TRABAJO_EN_EQUIPO");

//VALOR INICIAL
let VALOR_INICIAL = 0;


//EXPERIENCIA
const HTML = 98;
const JAVASCRIPT = 75;
const Css = 92;
const REACT = 30;

const DISEÑO = 95;
const CREATIVIDAD = 78;
const TRABAJO_EN_EQUIPO = 85;





//VELOCIDAD
const velocidad_porcentaje = 25;
const incio_de_carga_barra = 300;


//porcentaje (numeros)
const PORCENTAJE = (porcentaje, experiencia) => {
    let intervalo = setInterval(() => {
        VALOR_INICIAL++;
        porcentaje.textContent = `${VALOR_INICIAL}%`;

        if (VALOR_INICIAL >= experiencia) {
            clearInterval(intervalo);
        }

    }, velocidad_porcentaje);
};


//barra medidora
const BARRA_DE_PROGRESO = (porcentaje, experiencia) => {
    setTimeout(() => {
        PORCENTAJE(porcentaje, experiencia);

        porcentaje.nextSibling.nextSibling.style.width = `${experiencia}%`;
    }, incio_de_carga_barra)
};





const LLAMANDO_FUNCIONES = () => {
    BARRA_DE_PROGRESO(PORCENTAJE_HTML, HTML);
    BARRA_DE_PROGRESO(PORCENTAJE_CSS, Css);
    BARRA_DE_PROGRESO(PORCENTAJE_JS, JAVASCRIPT);
    BARRA_DE_PROGRESO(PORCENTAJE_REACT, REACT);
    BARRA_DE_PROGRESO(PORCENTAJE_DISEÑO, DISEÑO);
    BARRA_DE_PROGRESO(PORCENTAJE_CREATIVIDAD, CREATIVIDAD);
    BARRA_DE_PROGRESO(PORCENTAJE_TRABAJO_EN_EQUIPO, TRABAJO_EN_EQUIPO);
}


// llama a la funcion cuando el elemento esta visible
const elemento = document.querySelector(".cont_estadisticas");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Aquí llamas a tu función
            LLAMANDO_FUNCIONES();
            observer.unobserve(entry.target); 
        }
    });
});

observer.observe(elemento);
