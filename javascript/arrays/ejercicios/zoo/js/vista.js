function printOneAnimal(pObjAnimal) {

    document.write(`<article class="${getPeligrosity(pObjAnimal.peligrosidad)}">
        <h2>${pObjAnimal.raza}</h2>
        <figure>
            <img src="${pObjAnimal.foto}"
                alt="${pObjAnimal.raza}">
        </figure>
        <p>Peso: ${pObjAnimal.peso}kg</p>
    </article>`)
}

function getPeligrosity(pNumber) {
    let peligrosity = "";

    switch (pNumber) {
        case 5:
            peligrosity = "peligroso";
            break;

        case 4:
            peligrosity = "cuidado";
            break;

        case 3:
            peligrosity = "ojito";
            break;

        case 2:
            peligrosity = "suavecito";
            break;

        case 1:
            peligrosity = "docil";
            break;

    }

    return peligrosity
}

const printZoo = function (pAnimalList) {
    pAnimalList.forEach(animal => printOneAnimal(animal));
}

//printZoo(animales);
//printZoo(filterByPeligrosity(animales, 4))
let listaAnimalesByName = searchByName(animales, 'le');
printZoo(listaAnimalesByName)
