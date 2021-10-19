const url = 'https://jsonplaceholder.typicode.com/photos';
const sectionAlbum = document.querySelector('#album');

function getPhotos(pNumImages) {

    const cargarImagenes = new Promise((resolve, reject) => {

        //aqui voy hacer la peticion a una api.
        const pedido = new XMLHttpRequest();
        pedido.open('GET', url, true);
        pedido.send();
        pedido.addEventListener('load', (event) => {

            if (event.target.status === 200) {
                let response = JSON.parse(event.target.responseText);
                resolve(response.slice(0, pNumImages));

                //opcion 2 
                /*  const arrayImages = new Array();
                 for (let i = 0; i < pNumImages; i++) {
                     arrayImages.push(response[i]);
                 }
                 resolve(arrayImages); */
            }
            else {
                reject('No se ha podido cargar el contenido')
            }
        })


    })
    return cargarImagenes;
}

const inputImages = document.querySelector('#imagenes');
const btnMostrar = document.querySelector('#mostrar');

btnMostrar.addEventListener('click', () => {

    const numeroImagenes = parseInt(inputImages.value)

    getPhotos(numeroImagenes)
        .then(arrDatos => printImages(arrDatos, sectionAlbum))
        .catch(error => console.log(error))
        .finally(() => {
            //Esta funcion la uso cuando quiera ejecutar algo siempre que se ejecute la promesa
            console.log('esto siempre se ejecuta pero depende de que la promesa finalice');
        })

})




function printImages(pList, pSection) {
    pSection.innerHTML = "";
    pList.forEach(photo => printPhoto(photo, pSection))
}

function printPhoto(pPhoto, pSection) {

    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    figcaption.innerText = pPhoto.title;
    img.src = pPhoto.url;
    figure.appendChild(img)
    figure.appendChild(figcaption);

    pSection.appendChild(figure);

}

//quiero que la promesa me permite elegir cuantas imagenes puedo cargar.

//quiero un input donde puede mater un numero de imagenes a cargar, cuando le de al boton mostrar, mostrare ese numero de imagenes.






