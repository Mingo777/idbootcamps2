import Tarea from './tarea.js';

export default class Producto extends Tarea {

    constructor(pId, pTitulo, pPrioridad, pPrecio, pCantidad = 1) {
        super(pId, pTitulo, pPrioridad);
        this.precio = pPrecio;
        this.cantidad = pCantidad;
    }

    calcularPrecio() {
        return this.precio * this.cantidad;
    }

    mostrarTarea(pSection) {
        pSection.innerHTML += `<article id="item_${this.id}">
                                <h3>${this.titulo}</h3>
                                <ul>
                                    <li>Prioridad: ${this.prioridad}</li>
                                    <li>Precio: ${this.calcularPrecio()}</li>
                                    <li class="${(this.completado === true) ? 'verde' : 'rojo'}" >Estado: ${(this.completado === true) ? 'completada' : 'no completada'} </li>
                                </ul>
                                </article>`
    }

}