const HEADER_INICIO = document.getElementById("header_inicio")
const HEADER_SOBRE_MI = document.getElementById("header_sobre_mi")
const HEADER_HABILIDADES = document.getElementById("header_habilidades")
const HEADER_PORTAFOLIO = document.getElementById("header_portafolio")
const HEADER_CONTACTO = document.getElementById("header_contacto")

const INICIO = document.getElementById("sobre_mi");
const SOBRE_MI = document.getElementById("sobre_mi");
const HABILIDADES = document.getElementById("habilidades");
const PORTAFOLIO = document.getElementById("portafolio");
const CONTACTO = document.getElementById("contacto");

const BOTON_FOOTER = document.getElementById("boton_footer");





const scrollBoton = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY; // Obtiene la posición del elemento
        window.scrollTo({
            top: top,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};


HEADER_SOBRE_MI.addEventListener('click', () => {scrollBoton('#SOBRE_MI');});
HEADER_HABILIDADES.addEventListener('click', () => {scrollBoton('#HABILIDADES');});
HEADER_PORTAFOLIO.addEventListener('click', () => {scrollBoton('#PORTAFOLIO');});
HEADER_CONTACTO.addEventListener('click', () => {scrollBoton('#CONTACTO');});


const inicio = 0;
const scroll_0 = (valor) => {
    window.scrollTo({
        top: valor,
        behavior: 'smooth'
    });
};

HEADER_INICIO.addEventListener("click", () => scroll_0(inicio));
BOTON_FOOTER.addEventListener("click", () => scroll_0(inicio));