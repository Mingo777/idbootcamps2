const baseUrl = 'https://swapi.dev/api/'

async function getDataMenu(pType, pPage = 1) {
    const url = baseUrl + pType + '?page=' + pPage;
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    printMenu(data);
}

getDataMenu('people');


async function getDataInfo(pUrl) {
    const response = await fetch(pUrl, { method: 'GET' });
    const data = await response.json();

    if (data.episode_id) {
        //Soy un peli
        printFilm(data);
    } else {
        //personaje
        printDataInfo(data);
    }

}