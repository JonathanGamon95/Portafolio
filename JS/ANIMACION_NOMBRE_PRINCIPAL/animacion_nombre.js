const h1 = document.getElementById("nombre_principal");
    const NOMBRE = ["JONATHAN GAMON"];
    let A = [];
    let I = 0;
    const pausa = 2000;
    const velocidad = 80;

    const agregandoLetras = () => {
        const agregar = setInterval(() => {
            A.push(NOMBRE[0][I]);
            I++;
            h1.textContent = A.join('');


            if (A.join('') == NOMBRE) {
                clearInterval(agregar)

                setTimeout(() => {
                    quitandoLetras()
                }, pausa)
                // console.log("se detuvo")
            }
        }, velocidad)
    };


    const quitandoLetras = () => {
        const quitar = setInterval(() => {
            A.pop();
            I--;
            h1.textContent = A.join('');

            if (A.length == 0) {
                clearInterval(quitar);

                setTimeout(() => {
                    agregandoLetras();
                }, pausa)
                // console.log("listo")
            }
        }, velocidad)
    };

    agregandoLetras()