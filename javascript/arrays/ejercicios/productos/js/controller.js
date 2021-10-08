function filterByPrice(pProductList, pMinPrice, pMaxPrice) {
    let filterList = pProductList.filter(product => product.price >= pMinPrice && product.price <= pMaxPrice);

    return filterList;
}

function filterByCategory(pProductList, pCategory) {
    let filterList = pProductList.filter(product => product.category === pCategory);

    return filterList;
}

function filterByStock(pProductList, pStock) {
    let filterList = pProductList.filter(product => product.stock === pStock);

    return filterList;
}

// responde a la ultima pregunta 
filterByPrice(filterByStock(products, true), 1, 3);



