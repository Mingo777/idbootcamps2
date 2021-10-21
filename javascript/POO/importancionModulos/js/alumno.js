class Alumno {

    constructor(pNombre, pEdad, pNota) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.nota = pNota;
    }


    presentar() {
        return 'Hola mi nombre es ' + this.nombre;
    }

}

export default Alumno;