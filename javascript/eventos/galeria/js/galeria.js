//capturar los elementos con los que voy a trabajar.

let imagen = document.querySelector('figure img');
let botones = document.querySelectorAll('figure button');
let imagenActual = 1;

for (let boton of botones) {
    boton.addEventListener('click', moverGaleria);
}

function moverGaleria(event) {
    imagenActual = (event.target.innerText === 'SIGUIENTE') ? imagenActual + 1 : imagenActual - 1;
    //los limites por arriba y por abajo, que tipo de carrusel queremos hacer.
    if (imagenActual <= 0) {
        imagenActual = 3;
    } else if (imagenActual >= 4) {
        imagenActual = 1;
    }

    cambiarImagen(imagenActual);
}

function cambiarImagen(pNum) {
    imagen.src = `./img/imagen${pNum}.jpg`;
}