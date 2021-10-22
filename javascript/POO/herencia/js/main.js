import Tarea from './tarea.js';
import Producto from './producto.js';

const tareas = new Array(
    new Tarea(1, 'Estudiar javascript', 'urgente'),
    new Tarea(2, 'Sacar el perro', 'diaria'),
    new Tarea(3, 'Plantar un arbol', 'mensual')
)

const listaCompra = new Array(
    new Producto(15, 'Leche Desnatada', 'diaria', 0.50, 10),
    new Producto(16, 'Carne', 'mensual', 4.25, 2),
    new Producto(17, 'Pan', 'diaria', 0.35, 2)
)

console.log(listaCompra);


const sectionTareas = document.querySelector('#tareas');
const sectionProductos = document.querySelector('#listaproductos');

function pintarTareas(pLista, pSection) {
    pLista.forEach(tarea => tarea.mostrarTarea(pSection));
}

pintarTareas(tareas, sectionTareas);
pintarTareas(listaCompra, sectionProductos);


listaCompra[2].completarTarea();
listaCompra[2].calcularPrecio();
tareas[1].completarTarea();
tareas[2].completarTarea();
