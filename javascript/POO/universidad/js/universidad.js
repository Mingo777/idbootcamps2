export default class Universidad {

    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = new Array();
    }

    agregarAlumno(pAlumno) {
        this.alumnos.push(pAlumno);
    }

    obtenerAlumnosAsignatura(pNombreAsignatura) {
        let count = 0;

        this.alumnos.forEach(alumno => {
            alumno.asignaturas.forEach(asignatura => {
                count = (asignatura.nombre === pNombreAsignatura) ? count + 1 : count;
            })
        })

        console.log(`En ${pNombreAsignatura} hay ${count} alumnos`);
    }

    mostrarUniversidad() {
        console.log(`UNIVERSIDAD(nombre: ${this.nombre})`);
        this.alumnos.forEach(alumno => alumno.mostrarEstudiante());
    }

}