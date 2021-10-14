let botones = document.querySelectorAll('.menu a');
let secciones = document.querySelectorAll('.contenedor section');
botones.forEach(boton => boton.addEventListener('click', capturarBoton));


function capturarBoton(event) {
    //los enlaces href y los formularios tiene una accion por defecto que es llevarme a otra pagina o recargar la pagina. Teng que evitar inicialmente esta accion por defecto.
    event.preventDefault();

    let seccion = event.target.innerText.toLowerCase(); //contacto

    //aqui estoy desactivando todas las secciones y todos lo botones
    secciones.forEach(seccion => seccion.style.display = 'none');
    botones.forEach(boton => boton.classList.remove('activa'));


    //esta es la seccion que tengo que cambiar a display block.Primero tengo que capturar la seccion y luego cambiarle los estilos.

    //Aqui activar solo el boton que he tocado y su seccion.
    document.getElementById(seccion).style.display = 'block';
    event.target.classList.add('activa');


}