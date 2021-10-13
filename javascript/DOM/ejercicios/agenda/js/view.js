//capturar las secciones de forma global donde vamos a pintar.

let sectionLaboral = document.querySelector('.laboral div');
let sectionPersonal = document.querySelector('.personal div');
let id = 1;

/*
*   funcion printContacts para pintar toda la agenda
*/
function printContacts(pContactList) {
    pContactList.forEach(contact => printOneContact(contact))
}

/*
* function printOneContact para pintar un contacto dentro de la seccion pasada por parametro.
*/

function printOneContact(pContact) {
    let article = document.createElement('article') //<article></article>
    let h3 = document.createElement('h3') // <h3></h3>
    let ul = document.createElement('ul') //<ul></ul>

    article.id = 'article_' + pContact.id;

    //contenido
    let contentH3 = document.createTextNode(`${pContact.name} ${pContact.surname}`);
    h3.appendChild(contentH3);
    ul.innerHTML = `<li>Telefono: ${pContact.phone}</li>
                    <li>Email: ${pContact.email}</li>`;

    article.appendChild(h3);
    article.appendChild(ul);

    const section = (pContact.type === 'laboral') ? sectionLaboral : sectionPersonal;
    section.appendChild(article);

}

printContacts(agenda);