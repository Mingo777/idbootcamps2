import ApiMorty from "./class.api.js";
const sectionCharacters = document.querySelector('main .container .flex');
const buttons = document.querySelectorAll('footer .container button');
const baseUrl = 'https://rickandmortyapi.com/api/';

const morty = new ApiMorty();

//funcion autoejecutada
(async (pType) => {
    const url = baseUrl + pType;
    const data = await morty.getData(url);
    console.log(data);
    buttonCharge(data.info.prev, data.info.next);
    if (pType === "character") {
        morty.printCharacters(data.results, sectionCharacters)
    } else if (pType === 'episode') {
        morty.printEpisodes(data.results, sectionCharacters);
    }

})('character')


function buttonCharge(pPrev, pNext) {
    buttons[0].style.visibility = 'visible';
    buttons[1].style.visibility = 'visible';
    buttons[0].dataset.url = pPrev;
    buttons[1].dataset.url = pNext;
    if (pPrev === null) {
        buttons[0].style.visibility = 'hidden'
    }

    if (pNext === null) {
        buttons[1].style.visibility = 'hidden'
    }

    buttons.forEach(button => button.addEventListener('click', gotoPage))

}

async function gotoPage(event) {
    const url = event.target.dataset.url;
    const data = await morty.getData(url);
    console.log(data);
    if (event.target.dataset.url.includes('character') === true) {
        morty.printCharacters(data.results, sectionCharacters);
    } else if (event.target.dataset.url.includes('episode') === true) {
        morty.printEpisodes(data.results, sectionCharacters);
    }

    buttonCharge(data.info.prev, data.info.next);

}


//selector de genero
const selectorGender = document.querySelector('#gender');
selectorGender.addEventListener('change', changeGender);

async function changeGender(event) {
    let gender = event.target.value;
    const url = baseUrl + 'character/?gender=' + gender;
    const data = await morty.getData(url);
    buttonCharge(data.info.prev, data.info.next);
    morty.printCharacters(data.results, sectionCharacters);
}


//buscador por nombre

const inputSearch = document.querySelector('#search');
const btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener('click', async (event) => {
    event.preventDefault();

    let word = inputSearch.value;

    if (word === "") {
        alert('No hay nada para buscar');
        return;
    }

    const urlSearch = baseUrl + 'character/?name=' + word;
    const data = await morty.getData(urlSearch);

    if (data.error !== "") {
        alert('No hay resultado de busqueda');
        return;
    }
    buttonCharge(data.info.prev, data.info.next);
    morty.printCharacters(data.results, sectionCharacters);
})