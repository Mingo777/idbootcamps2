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
    pararAudio();
    iniciarAudio();
    let url = event.target.dataset.url;
    getDataInfo(url);
}

function iniciarAudio() {
    const audio = document.createElement('audio');
    audio.src = 'mp3/sable.mp3';
    audio.autoplay = "autoplay";
    audio.id = "sable";
    document.body.appendChild(audio);
}

function pararAudio() {
    let audio = document.getElementById('sable');
    if (audio !== null) {
        audio.parentNode.removeChild(audio);
    }

}



function printDataInfo(pData) {

    viewPerson.innerHTML = `<h2>${pData.name}</h2>
                <ul>
                    <li>Altura: <strong>${pData.height}</strong></li>
                    <li>Peso:  <strong>${pData.mass} </strong></li>
                    <li>Color Piel:  <strong>${pData.skin_color} </strong></li>
                    <li>Color Pelo:  <strong>${pData.hair_color} </strong></li>
                    <li>Genero: <strong> ${pData.gender} </strong></li>
                    <li>Año de nacimiento:  <strong>${pData.birth_year} </strong></li>
                </ul>
                <h2>Peliculas donde aparece</h2>
                <div class="peliculas"></div>`

    const films = pData.films;

    films.forEach(film => getDataInfo(film));


}

function printFilm(pFilm) {
    const date = new Date(pFilm.release_date);
    const sectionFilms = document.querySelector('.peliculas');
    sectionFilms.innerHTML += `<article>
                        <h3>${pFilm.title}</h3>
                        <ul>
                            <li>Capitulo: ${pFilm.episode_id}</li>
                            <li>Director: ${pFilm.director}</li>
                            <li>Año: ${date.toLocaleDateString()}</li>
                        </ul>
                    </article>`
}