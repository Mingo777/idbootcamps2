//capturar los elementos del dom con los que voy a interactuar.

const listCarrito = document.querySelector('#carritoList');
const totalspan = document.querySelector('#total span');
let carrito = new Array();

//tengo elementos en el localstorage

if (localStorage.getItem('carrito') !== null) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    printCarrito(carrito, listCarrito);
}

function printCarrito(pListProductCart, pSectionCart) {
    let total = 0;
    pListProductCart.forEach(item => {
        total += item.precio;
        pSectionCart.innerHTML += `<li>${item.producto}: ${item.precio}€</li>`
    })
    totalspan.innerText = total;
}