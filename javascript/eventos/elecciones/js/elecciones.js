//vamos un crear un metodo que permita pintar los datos de un unico partido politico
let tituloPartido = document.querySelector('#bypartido h2');
let sectionVotos = document.querySelector('#bypartido .votos');
let sectionAnios = document.querySelector('#bypartido .anios');
let censo = 3000000;

function printAllDataByPartido(pListEleccionsByPartido, pSectionVotos, pSectionAnios) {
    pSectionVotos.innerHTML = "";
    pSectionAnios.innerHTML = "";
    pListEleccionsByPartido.forEach(partido => printDataByYear(partido, pSectionVotos, pSectionAnios));
}

function printDataByYear(pPartido, pSectionVotos, pSectionAnios) {

    let divVotos = document.createElement('div');
    let divAnios = document.createElement('div');
    //color a la barra
    divVotos.classList.add(pPartido.candidatura);

    //textos dentro de cada zona
    divVotos.innerText = pPartido.votos;
    divAnios.innerText = pPartido.year;

    //la altura de la barra en funcion de los votos.
    let porcentaje = (parseVotos(pPartido.votos) / censo) * 100;

    divVotos.style.height = porcentaje + '%';

    pSectionVotos.appendChild(divVotos);
    pSectionAnios.appendChild(divAnios);
    tituloPartido.innerText = pPartido.candidatura.toUpperCase();

    divVotos.classList.add('transition');
}

//tengo que hacer una funcion que me devuelva la lista de votos por año de un partido. Filtrar.

function filterByPartido(pList, pPartido) {
    return pList.filter(partido => partido.candidatura === pPartido);
}

function parseVotos(pString) {

    // const votos = pString.split('.');
    // let dato = votos.join("");
    // console.log(parseInt(dato));

    const votos = parseInt(pString.split('.').join(""));
    return votos;
}

//capturas el selector de partidos.
let selectPartidos = document.querySelector('#partido');

function getAllPartidos(pElecciones) {

    const allPartidos = pElecciones.map(partido => partido.candidatura);
    const partidos = [... new Set(allPartidos)];

    return partidos;
}

//voy a llenar el selectPartidos con los partidos obtenidos del array de elecciones.

let misPartidos = getAllPartidos(elecciones);

for (let partido of misPartidos) {
    selectPartidos.innerHTML += `<option value="${partido}">${partido.toUpperCase()}</option>`
}


selectPartidos.addEventListener('change', (event) => {
    let partidoList = filterByPartido(elecciones, event.target.value);
    printAllDataByPartido(partidoList, sectionVotos, sectionAnios);
})




//grafica por partidos de cada año.

//paso 1: capturo los elementos con lo que voy a trabajar.

let sectionYear = document.querySelector('#byyear');
let tituloYear = document.querySelector('#byyear h2');
let selectYear = document.querySelector('#anio');


function getAllYears(pElecciones) {
    const allYears = pElecciones.map(partido => partido.year);
    const anios = [... new Set(allYears)];
    return anios;
}

let misAnios = getAllYears(elecciones);

for (let anio of misAnios) {
    selectYear.innerHTML += `<option value="${anio}">${anio}</option>`
}

selectYear.addEventListener('change', (event) => {
    printAllDataByYear(filterByYear(elecciones, event.target.value), sectionYear);
    //lamada a las funciones de filtrado por año y pintado de datos.
})

function filterByYear(pElecciones, pYear) {
    return pElecciones.filter(partido => partido.year === pYear);
}

//pintemos

function printAllDataByYear(pListaEleccionesByYear, pSectionYear) {
    pSectionYear.innerHTML = `<h2>${pListaEleccionesByYear[0].year}</h2>`;
    pListaEleccionesByYear.forEach(partido => printDataByPartido(partido, pSectionYear))
}

function printDataByPartido(pPartido, pSectionYear) {
    tituloYear.innerText = pPartido.year;

    let div = document.createElement('div');
    div.classList.add(pPartido.candidatura);
    div.innerText = pPartido.candidatura + ' - ' + pPartido.votos;

    pSectionYear.appendChild(div);

    let porcentaje = (parseVotos(pPartido.votos) / censo) * 100;
    div.style.width = porcentaje + '%';

}