//pintar todos los poligonos dentro de la seccion poligonos con sus caracteristicas

//crear un funcion moverPoligono que cada vez que la ejecutemos por consola podemos mover hacia la derecha cualquier poligono un numero de pixeles determinado pasados parametro.
const seccionPoligonos = document.querySelector('.poligonos');

function cargarDivs(pLista) {
    for (let i = 0; i < pLista.length; i++) {
        seccionPoligonos.innerHTML += `<div id="poligono${i}"></div>`
    }
}

cargarDivs(poligonos);

//cuando llame a la funcion ya tengo disponibles todos los poligonos, asi que lo capturo.

const misPoligonos = document.querySelectorAll('.poligonos div');

misPoligonos.forEach((poligono, index) => {
    //opcion 1

    poligono.setAttribute('style', `background-color: ${poligonos[index].backgroundColor}; width: ${poligonos[index].width}; height: ${poligonos[index].height}; border-radius: ${poligonos[index].radio}; border: ${poligonos[index].border}`)


    //opcion 2
    poligono.style.backgroundColor = poligonos[index].backgroundColor;
    poligono.style.width = poligonos[index].width;
    poligono.style.height = poligonos[index].height;
    poligono.style.borderRadius = poligonos[index].radio;
    poligono.style.border = poligonos[index].border;
})