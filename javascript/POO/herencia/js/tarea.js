export default class Tarea {

    constructor(pId, pTitulo, pPrioridad) {
        this.titulo = pTitulo;
        this.prioridad = pPrioridad;
        this.id = pId;
        this.completado = false;
    }

    mostrarTarea(pSection) {
        pSection.innerHTML += `<article id="item_${this.id}">
                                <h3>${this.titulo}</h3>
                                <ul>
                                    <li>Prioridad: ${this.prioridad}</li>
                                    <li class="${(this.completado === true) ? 'verde' : 'rojo'}" >Estado: ${(this.completado === true) ? 'completada' : 'no completada'} </li>
                                </ul>
                                </article>`
    }

    completarTarea() {
        this.completado = !this.completado;
        let articleActualizar = document.querySelector('#item_' + this.id + ' li:last-child')
        if (this.completado) {
            articleActualizar.classList.replace('rojo', 'verde');
            articleActualizar.innerText = 'completada'
        } else {
            articleActualizar.classList.replace('verde', 'rojo');
            articleActualizar.innerText = 'no completada'
        }

    }

}
