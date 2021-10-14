const ferrari = document.querySelector('#ferrari');
const lamborghini = document.querySelector('#lamborghini');
const porche = document.querySelector('#porche');
const mensaje = document.querySelector('#mensaje');
let avanceFerrari = 0;
let avanceLamborghini = 0;
let avancePorche = 0;
let nitro = 3;


//los evento de teclado solo responde al document y a los elementos de tipo formulario.

document.addEventListener('keydown', capturarTeclas)

function capturarTeclas(event) {

    switch (event.keyCode) {
        case 32:
            //mover el coche
            moverFerrari(20)
            break;

        case 78:
            let velocidad = 0;
            if (nitro > 0) {
                velocidad = 40;
                nitro--;
            } else {
                velocidad = 20;
            }
            moverFerrari(velocidad);
            break;
    }
}

//parar el ferrari en al meta

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft = avanceFerrari + 'px';
    if (avanceFerrari >= 680) {
        pararJuego('Ferrari')
    }
}

//lamborghini se tiene que mover de forma autonoma. Funcion las funciones intervalicas.

const intervaloLam = setInterval(moverLamborghini, 100);

function moverLamborghini() {
    //tiene que mover el lamborghini a velocidad constante.
    avanceLamborghini += 20;
    lamborghini.style.marginLeft = avanceLamborghini + 'px';
    if (avanceLamborghini >= 680) {
        pararJuego('Lamborghini');
    }
}

//porche se tiene que mover de forma autonoma pero con velocidad variable entre 1 y 40.

const intervaloPorche = setInterval(moverPorche, 100);

function moverPorche() {
    avancePorche += Math.random() * 41;
    porche.style.marginLeft = avancePorche + 'px';
    if (avancePorche >= 680) {
        pararJuego('Porche')
    }
}


function pararJuego(pGanador) {
    clearInterval(intervaloLam);
    clearInterval(intervaloPorche);
    document.removeEventListener('keydown', capturarTeclas);
    mensaje.innerText = "Ha ganado " + pGanador;
}

