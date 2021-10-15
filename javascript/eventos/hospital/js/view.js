//capturar elementos del interfaz con los que voy interactuar.
const sectionPatients = document.querySelector('#pacientes div');
const sectionNumPatients = document.querySelector('.numpacientes');

/*
* Funcion de pintar todos los pacientes
*/
printPatients(pacientes, sectionPatients, sectionNumPatients);

function printPatients(pPatientsList, pSection, pSectionNumPacients) {
    pSectionNumPacients.innerText = pPatientsList.length;
    pSection.innerHTML = "";
    pPatientsList.forEach(patient => printOnePatient(patient, pSection));
}

function printOnePatient(pPatient, pSection) {

    //etiquetas
    let article = document.createElement('article') //<article></article>
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul') //<ul></ul>
    let p = document.createElement('p') // <p></p>

    //contenido que proviene del pPatient

    h3.innerText = `${pPatient.nombre} ${pPatient.apellido}`;
    ul.innerHTML = `<li>Edad: ${pPatient.edad}</li>
                    <li>Seguridad Social: ${pPatient.numeroSS}</li>`;
    p.innerText = pPatient.diagnostico;

    article.appendChild(h3);
    article.appendChild(ul);
    article.appendChild(p);

    //aqui pondria los id article o clases necesarias por ejemplo un data-attribute

    pSection.appendChild(article);


}

//recoger los datos del filtro de edad

const inputAgeMin = document.querySelector('#edadmin');
const inputAgeMax = document.querySelector('#edadmax');
const btnAge = document.querySelector('#btnAge');

btnAge.addEventListener('click', getDataAge);

function getDataAge(event) {
    event.preventDefault();

    const ageMin = Number(inputAgeMin.value);
    const ageMax = Number(inputAgeMax.value);

    if (ageMin === 0 || ageMax === 0) {
        alert('No metas texto en los campos numeros, garrulo');
        inputAgeMin.style.borderColor = 'red';
        inputAgeMax.style.borderColor = 'red';
        return false;
    }

    if (ageMin <= ageMax) {
        let listaFiltradaPorEdad = filterByAge(pacientes, ageMin, ageMax);
        printPatients(listaFiltradaPorEdad, sectionPatients, sectionNumPatients)
    } else {
        alert('La edad minima no puede ser mas alta que la maxima');
    }

    inputAgeMin.value = "";
    inputAgeMax.value = ""
}


/*
 * Recoger los datos de lo palabra a buscar.
 */

const inputSearch = document.querySelector('#buscador');
inputSearch.addEventListener('input', (event) => {
    printPatients(
        searchByWord(pacientes, event.target.value),
        sectionPatients,
        sectionNumPatients)
});


/*
*   Llenar el array de diagnosticos con los elementos del array.
*/
const selectDiagnostico = document.querySelector('#diagnostico');

//necesito crear un array de diagnosticos no repetido
const arrayDiagnosticos = pacientes.map(paciente => paciente.diagnostico);
//console.log(arrayDiagnosticos);

//new Set elimina los elementos duplicados dentro de cualquier array simple
const arrayDiagnosticosUnicos = [... new Set(arrayDiagnosticos)];
//console.log(arrayDiagnosticosUnicos);

for (let diagnostico of arrayDiagnosticosUnicos) {
    selectDiagnostico.innerHTML += `<option value="${diagnostico}">${diagnostico}</option>`;
}

selectDiagnostico.addEventListener('change', getDataDiagnosis);

function getDataDiagnosis(event) {
    let diagnosis = event.target.value;

    if (diagnosis === "") {
        printPatients(pacientes, sectionPatients, sectionNumPatients);
        return false;
    }
    let listaFiltradaPorDiagnostico = filterByDiagnosis(pacientes, diagnosis);
    printPatients(listaFiltradaPorDiagnostico, sectionPatients, sectionNumPatients);
}