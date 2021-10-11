let section = "";
function printList(pList) {

    section += `<section class="${pList[0].letter}"><h2>${pList[0].letter}</h2>`

    pList.forEach(element => {
        section += printElement(element)
    });

    section += `</section>`
    document.body.innerHTML = section;
}

function printElement(pElement) {
    return `<article>
            <dt>${pElement.word}</dt>
            <dd>${pElement.definition}</dd>
        </article>`
}


const abecerario = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p');

for (let letter of abecerario) {
    let lista = filterByLetter(diccionario, letter)
    if (lista.length !== 0) {
        printList(lista);
    }
}

