
function printProducts(pProductsList) {
    for (let product of pProductsList) {
        printOneProduct(product)
    }
}

function printOneProduct(pObjProduct) {
    document.write(`<article class="${(pObjProduct.stock) ? 'stock' : 'sinstock'}">
        <h2>${pObjProduct.name}</h2>
        <p>Precio: ${pObjProduct.price}€</p>
        <p>Categoria: ${pObjProduct.category}</p>
    </article>
    <hr>`);
}

printProducts(products);