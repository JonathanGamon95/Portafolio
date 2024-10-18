const BOTON_DESCARGA_CV = document.getElementById("boton_CV");

const descarga = () => {
    const filePath = './CV/CV-desarrollo_web.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'archivo.pdf'; // Nombre sugerido para el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

BOTON_DESCARGA_CV.addEventListener("click", descarga);