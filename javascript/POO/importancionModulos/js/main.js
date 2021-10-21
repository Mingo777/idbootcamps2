import { sumar, nombre, restar } from './funciones.js';
import Alumno from './alumno.js';

console.log(nombre);

console.log(restar(2, 3));

const jorge = new Alumno('jorge', 30, 7);
const jose = new Alumno('jose', 30, 6.5);

console.log(jorge.presentar())