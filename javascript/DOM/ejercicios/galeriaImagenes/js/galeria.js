const galeria = document.querySelector('#galeria');

function printGallery(pImageList, pSection) {
    pImageList.forEach(image => printImage(image, pSection))
}

function printImage(pImage, pSection) {
    pSection.innerHTML += `<article style="width: ${pImage.width}px; height: ${pImage.height}px; background-image: url(${pImage.url}); ">
            <h2>${pImage.title}</h2>
        </article>`
}

printGallery(imagenes, galeria);

function markImage(pNumImage) {
    const selectImage = document.querySelector(`#galeria article:nth-child(${pNumImage})`);
    selectImage.style.border = "3px solid red";
}