
let id = animales.length;

function insertAnimal(pRaza, pPeso, pPeligrosidad, pFoto, pLista) {
    id++;
    const newAnimal = {
        id: id,
        raza: pRaza,
        peso: pPeso,
        peligrosidad: pPeligrosidad,
        foto: pFoto
    }

    pLista.push(newAnimal);
}

insertAnimal('Perro', 60, 3, 'https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg', animales);



function filterByPeligrosity(pAnimalList, pPeligrosity) {
    let filterList = pAnimalList.filter(animal => animal.peligrosidad === pPeligrosity)

    return filterList;
}


function searchByName(pAnimalList, pWordSearch) {

    const filterList = pAnimalList.filter(animal => {
        return animal.raza.toLowerCase().includes(pWordSearch.toLowerCase());
    })

    return filterList;
}


//opcion 1 borrando del array

function deleteById(pAnimalList, pId) {
    //primero saber la posicion del elemento a borrar con id x -> findIndex
    let positionDelete = pAnimalList.findIndex(animal => animal.id === pId);

    //con esta posicion capturada lo borro del array -> splice
    if (positionDelete !== -1) {
        pAnimalList.splice(positionDelete, 1);
    }
}

//opcion 2 filtrando todos menos el que quiero borrar.

function deleteFilter(pAnimalList, pId) {
    const deleteList = pAnimalList.filter(animal => animal.id !== pId);
    return deleteList;
}

//actualizar un animal por campo.

function updateAnimal(pAnimalList, pId, pKey, pValue) {

    const animalUpdate = pAnimalList.find(animal => animal.id === pId);
    animalUpdate[pKey] = pValue;
    return 'actualizado';
}

updateAnimal(animales, 1, 'peso', 100)

