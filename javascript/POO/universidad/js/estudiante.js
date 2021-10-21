export default class Estudiante {

    constructor(pNombre, pApellidos) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = new Array();
    }

    agregarAsignatura(pAsignatura) {
        this.asignaturas.push(pAsignatura);
    }

    mostrarEstudiante() {
        console.log(`ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos}) Estas son las asignaturas que cursa:`);

        for (let asignatura of this.asignaturas) {
            asignatura.mostrarAsignatura(true)
        }
    }

}