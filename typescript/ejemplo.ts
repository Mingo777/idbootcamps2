// inferencia de tipos

class Estudiante {

    nombre: string;
    apellidos: string;

    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
    }
}

let nombre: string = 'Mario';
console.log(nombre);

nombre.toUpperCase().toLowerCase();

let numero: number = 19;

let activo: boolean = true;

let est: Estudiante = new Estudiante('Pepe', 'García');

let objeto: any = {
    coche: 'mercedes',
    color: 'verde',
    calle: 'gran via'
}

console.log(objeto.coche);

objeto = 456;
objeto = false;

// ARRAYS

let numeros: number[] = [2, 3, 4, 4, 56];
numeros.push(34);

let estudiantes: Estudiante[] = [est, new Estudiante('a', 'b')];

// FUNCIONES

function sumar(num1: number, num2: number): number {
    return num1 + num2;
}

sumar(4, 5);

sumar(56, 98);

const sumarV2 = (num1: number, num2: number): number => {
    return num1 + num2;
}

const sumarV3 = (num1: number, num2: number): number => num1 + num2;