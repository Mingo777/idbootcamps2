const nominas = new Array(
    {
        id: 1,
        nombre: 'Juan',
        bruto: 30000,
        irpf: 19,
        pagas: 12,
    },
    {
        id: 2,
        nombre: 'Manu',
        bruto: 20000,
        irpf: 15,
        pagas: 14,
    },
    {
        id: 3,
        nombre: 'Ruben',
        bruto: 22000,
        irpf: 17,
        pagas: 16,
    },
    {
        id: 4,
        nombre: 'Danny',
        bruto: 19000,
        irpf: 14,
        pagas: 12,
    },
)

//quiero realizar un programa que calcule y añada a mi lista un nuevo campo en cada objeto sueldo neto anual y sueldo neto mensual.

//netoAnual = bruto - ((bruto *  irpf) / 100)

//netoMensual = netoAnual / pagas

//saca el sueldo máximo y minimo de la empresa

function calcularSueldoNeto() {

    nominas.forEach(nomina => {

        let netoAnual = nomina.bruto - ((nomina.bruto * nomina.irpf) / 100)

        let netoMensual = netoAnual / nomina.pagas;

        nomina.netoAnual = netoAnual;
        nomina.netoMensual = netoMensual;
    })
}

//sacar el sueldo maximo y el sueldo minimo.


function calcularSueldoMaximo(pList) {
    let sueldoMaximo = 0;

    let listaOrdenada = pList.sort((nominaA, nominaB) => {
        return nominaB.bruto - nominaA.bruto
    });

    sueldoMaximo = listaOrdenada[0].bruto;

    return sueldoMaximo
}



function calcularSueldoMinimo(pList) {
    let sueldoMinimo = 0;

    let listaOrdenada = pList.sort((nominaA, nominaB) => {
        return nominaA.bruto - nominaB.bruto
    });

    sueldoMinimo = listaOrdenada[0].bruto;

    return sueldoMinimo
}
