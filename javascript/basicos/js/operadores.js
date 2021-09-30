var numA = 8;
var numB = 3;

console.log('SUMA', numA + numB);
console.log('RESTA', numA - numB);
console.log('MULT', numA * numB);
console.log('DIV', numA / numB);

console.log('RESTO', numA % numB);

// Comparadores - devuelven Boolean

// Negación
var activo = true;

console.log('NEGACIÓN', !activo);

console.log('IGUALDAD', numA == numB);
console.log('IGUALDAD 2', 13 === '13');

// Triple igual compara valores y tipos

console.log('MAYOR', numA > numB);
console.log('MENOR', numA < numB);

console.log('MAYOR-IGUAL', numA >= numB);
console.log('MENOR-IGUAL', numA <= numB);

console.log('DIFERENTES', numA !== numB);

// Operadores Lógicos

// AND - && - Devuelve true si los dos lados de la operación son TRUE
// OR - || - Devuelve true si uno de los dos lados es TRUE

console.log(false && false);

console.log(false || false);

var edad = 24;

var mayor18 = edad >= 18; // true
var menor65 = edad <= 65; // false

var trabajador = mayor18 && menor65;
// true && false -> false

console.log(edad >= 18 && edad <= 65);
// 18 <= edad <= 65
