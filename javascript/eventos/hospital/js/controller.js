/*
*    filtrar pacientes por rango de edad mínima y máxim
*/

function filterByAge(pPatientsList, pAgeMin, pAgeMax) {
    const filterList = pPatientsList.filter(patient => {
        return patient.edad >= pAgeMin && patient.edad <= pAgeMax;
    })
    return filterList;
}

/*
*   Buscar cualquier palabra contenido o en nombre o en apellido
*/

function searchByWord(pPatientsList, pWord) {
    const filterList = pPatientsList.filter(patient => {
        return patient.nombre.toLowerCase().includes(pWord.toLowerCase()) ||
            patient.apellido.toLowerCase().includes(pWord.toLowerCase());
    })
    return filterList;
}

/*
 * Filtrar por diagnostico - recibe un array de un diagnostico y me devuelve una lista filtrada por ese diagnostico. 
 */

function filterByDiagnosis(pPatientsList, pDiagnosis) {

    const filterList = pPatientsList.filter(patient => patient.diagnostico === pDiagnosis);

    return filterList;
}