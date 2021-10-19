const sectionBlog = document.querySelector('#blog');

//metodo amazon
const url = 'https://jsonplaceholder.typicode.com/posts';

const pedido = new XMLHttpRequest();

//abrir el canal de comunicacion con la pagina. 
pedido.open('GET', url, true) //permite asincronicidad, false sincrono. 

// GET -> obtener informacion
// POST -> enviar informacion
// PUT/PATH -> actualizar informacion
// DELETE  -> para borrar informacion

//hacer un pedido, enviar un pedido 

pedido.send();

//estoy atento a los cambios que se produzcan en el pedido.
pedido.addEventListener('load', cargarArchivo);
//pedido.addEventListener('readystatechange', cargarArchivo);

function cargarArchivo(event) {
    if (event.target.readyState === 4 && event.target.status === 200) {
        setTimeout(() => {
            printBlog(JSON.parse(event.target.responseText), sectionBlog);
        }, 3000);

    }
}

console.log('hola');

function printBlog(pList, pSection) {
    pList.forEach(post => {
        pSection.innerHTML += `<article data-id="${post.id}">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </article>`

    });
}

