class Calculadora {

    //no va a tener metodo constructor. En javascript no es obligatorio, solo es obligatorio cunado quiero inicializar atributos.

    //metodos 

    sumar(pNumero1, pNumero2) {
        return pNumero1 + pNumero2
    }

    restar(pNumero1, pNumero2) {
        //voy a restar el mayor sobre el menor
        if (pNumero1 >= pNumero2) {
            return pNumero1 - pNumero2;
        } else {
            return pNumero2 - pNumero1;
        }
    }

    multiplicar(pNumero1, pNumero2) {
        return pNumero1 * pNumero2;
    }

    dividir(pNumero1, pNumero2) {
        return pNumero1 / pNumero2
    }

    mostrarResultado(pResultado, pHtmlZone) {
        pHtmlZone.innerText = pResultado;
    }

    potencia(pNumero1, pNumero2) {
        return pNumero1 ** pNumero2;
    }



}
