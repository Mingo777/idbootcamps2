let btn1 = document.getElementById('btn1');
let inputNumeros = document.getElementById('numeros');
let barraNumeros = document.querySelector('#barranumeros div');


btn1.addEventListener('click', capturarNumero);

function capturarNumero() {
    let numero = inputNumeros.value;
    barraNumeros.style.width = numero + '%';
}

//selector y voy ha hacer un evento de change

let selectPorcentaje = document.getElementById('porcentaje');
let barraPorcentaje = document.querySelector('#barraporcentaje div');

selectPorcentaje.addEventListener('change', capturarPorcentaje);

function capturarPorcentaje(event) {
    let porcentaje = event.target.value;

    barraPorcentaje.style.width = porcentaje + "%";
}

//evento es de tipo change


let inputRange = document.getElementById('range');
let barraRange = document.querySelector('#barrarange div');

inputRange.addEventListener('input', capturarRango);

function capturarRango(event) {
    let rango = event.target.value;
    barraRange.style.width = rango + '%';
}


