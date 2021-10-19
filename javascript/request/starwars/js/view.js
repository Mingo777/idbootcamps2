let menuPeople = document.querySelector('#personajes');
let viewPerson = document.querySelector('#vistaPersonaje');
let botonesPag = document.querySelectorAll('.botones div');

function printMenu(pDataObj) {
    menuPeople.innerHTML = "";
    pDataObj.results.forEach(person => printPersonMenu(person))
    //ojo me quedan los botones de paginacion

    botonesPag[0].dataset.page = pDataObj.previous;
    botonesPag[1].dataset.page = pDataObj.next;

    botonesPag[0].style.display = (pDataObj.previous === null) ? 'none' : 'block';
    botonesPag[1].style.display = (pDataObj.next === null) ? 'none' : 'block';

    botonesPag.forEach(boton => boton.addEventListener('click', gotoPage));

}

function gotoPage(event) {

    let url = event.target.dataset.page;
    let page = parseInt(url.split('=')[1][0]);

    getDataMenu('people', page);
}


function printPersonMenu(pPerson) {

    let li = document.createElement('li');
    li.innerText = pPerson.name;
    li.dataset.url = pPerson.url;

    menuPeople.appendChild(li);

    li.addEventListener('click', getPersonInfo);

}

function getPersonInfo(event) {
    let url = event.target.dataset.url;
    getDataInfo(url);
}