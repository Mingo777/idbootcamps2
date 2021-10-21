let botones = document.querySelectorAll('button');
let input1 = document.querySelector('#numero1');
let input2 = document.querySelector('#numero2');
let h1resultado = document.querySelector('.resultado');

const casio = new Calculadora();


botones.forEach(boton => boton.addEventListener('click', calcular));

function calcular(event) {
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);

    let resultado = 0;

    switch (event.target.innerText) {
        case 'SUMAR':
            resultado = casio.sumar(numero1, numero2);
            break;

        case 'RESTAR':
            resultado = casio.restar(numero1, numero2);
            break;

        case 'MULTIPLICAR':
            resultado = casio.multiplicar(numero1, numero2);
            break;

        case 'DIVIDIR':
            resultado = casio.dividir(numero1, numero2);
            break;

        case 'POTENCIA':
            resultado = casio.potencia(numero1, numero2);
            break;
    }

    casio.mostrarResultado(resultado, h1resultado);
}