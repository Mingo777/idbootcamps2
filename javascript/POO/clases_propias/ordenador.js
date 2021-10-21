class Ordenador {

    //propiedades y metodos.

    constructor(pHeight, pWidth, pRam, pProcessor, pPantalla = false, pTeclado = false) {
        //dentro del constructor en javascript creamos las propiedas y las llenamos con paramatros, ojo no son obligatorios los parametros.
        this.height = pHeight;
        this.width = pWidth;
        this.ram = pRam;
        this.processor = pProcessor;
        this.pantalla = pPantalla;
        this.teclado = pTeclado;
        this.estado = 'apagado';
    }

    //metodos - funciones que puede hacer mi objeto.

    encenderse() {
        this.estado = 'encendido';
    }

    apagarse() {
        this.estado = 'apagarse';
    }

    sumar(...numeros) {
        //rest parameter un array de numeros
        if (this.estado === 'encendido') {
            let suma = 0;
            numeros.forEach(numero => suma += numero);
            console.log(suma);
        }
        else {
            console.log('el ordenador no funciona, esta apagado garrulo');
        }
    }

    navegar(pUrl) {
        if (this.estado === 'encendido') {
            window.open(pUrl)
        }
        else {
            console.log('el ordenador no funciona, esta apagado garrulo');
        }

    }

}

const torre = new Ordenador(500, 200, 16, 'I9');
const portatil = new Ordenador(200, 20, 8, 'I5', true, true);
