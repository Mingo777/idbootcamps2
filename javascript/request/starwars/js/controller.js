const baseUrl = 'https://www.swapi.tech/api/'

async function getDataMenu(pType, pPage = 1) {
    const url = baseUrl + pType + '?page=' + pPage + '&limit=10';
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    printMenu(data);
}

getDataMenu('people');


async function getDataInfo(pUrl) {
    const response = await fetch(pUrl, { method: 'GET' });
    const data = await response.json();
    console.log(data.result.properties);
}