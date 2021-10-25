// inferencia de tipos
var Estudiante = /** @class */ (function () {
    function Estudiante(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
    }
    return Estudiante;
}());
var nombre = 'Mario';
console.log(nombre);
nombre.toUpperCase().toLowerCase();
var numero = 19;
var activo = true;
var est = new Estudiante('Pepe', 'García');
var objeto = {
    coche: 'mercedes',
    color: 'verde',
    calle: 'gran via'
};
console.log(objeto.coche);
objeto = 456;
objeto = false;
// ARRAYS
var numeros = [2, 3, 4, 4, 56];
numeros.push(34);
var estudiantes = [est, new Estudiante('a', 'b')];
// FUNCIONES
function sumar(num1, num2) {
    return num1 + num2;
}
sumar(4, 5);
sumar(56, 98);
var sumarV2 = function (num1, num2) {
    return num1 + num2;
};
var sumarV3 = function (num1, num2) { return num1 + num2; };
