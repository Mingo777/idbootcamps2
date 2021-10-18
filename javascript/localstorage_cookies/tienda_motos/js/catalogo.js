const cart = document.querySelector('#numcarrito');
const sectionProducts = document.querySelector('#productos');
const carrito = new Array();

function printAllProducts(pListProducts, pSectionProducts) {
    pSectionProducts.innerHTML = "";
    pListProducts.forEach(product => printProduct(product, pSectionProducts));
}


function printProduct(pProduct, pSectionProducts) {
    let article = document.createElement('article');

    article.innerHTML = ` <h3>${pProduct.producto}</h3>
                            <p>Precio: ${pProduct.precio} €</p>`;

    let boton = document.createElement('button');
    boton.dataset.id = pProduct.id;
    boton.innerText = "Añadir a carrito";
    boton.addEventListener('click', addCarrito);

    article.appendChild(boton);

    pSectionProducts.appendChild(article);

}

printAllProducts(productos, sectionProducts);


//añadir el producto al carrito, el carrito lo voy almacenar en el localstorage, para poder acceder a el desde cualquier punto de mi aplicacion.

function addCarrito(event) {
    let idSeleccionado = parseInt(event.target.dataset.id);
    let productoSeleccionado = productos.find(producto => producto.id === idSeleccionado);

    carrito.push(productoSeleccionado);

    localStorage.setItem('carrito', JSON.stringify(carrito));

}