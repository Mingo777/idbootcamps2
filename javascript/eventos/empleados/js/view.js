/*
*   funcion pintar empleados, recibe la lista y la seccion donde se pinta
*/

const sectionEmployees = document.querySelector('.list');
const salaryMin = 900;
let id = 3;

printEmployees(empleados, sectionEmployees);

function printEmployees(pEmployeesList, pSection) {
    pEmployeesList.forEach(employee => printOneEmployee(employee, pSection));
}

function printOneEmployee(pEmployee, pSection) {
    let article = document.createElement('article');

    article.innerHTML = `<h3>${pEmployee.name}</h3>
                <p>Email: ${pEmployee.email}</p>
                <p>Sueldo: ${pEmployee.salary} €</p>`

    let borrar = document.createElement('button');
    borrar.innerText = "Borrar";
    borrar.dataset.id = pEmployee.id;
    borrar.addEventListener('click', deleteEmployee);

    article.id = 'employee_' + pEmployee.id;
    if (pEmployee.salary < salaryMin) {
        article.classList.add('minimo');
    }
    article.appendChild(borrar);

    pSection.appendChild(article);
}
/*
*   deleteEmployee
*/


function deleteEmployee(event) {
    alert(event.target.dataset.id)
    //agenda
}


/*
*   recoja los datos del formulario y los envie a las funciones correspodientes.
*/

//capturamos todos los elementos que necesitamos para trabajar.

let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputSalary = document.querySelector('#salary');
let btnSave = document.querySelector('#btnSave');

btnSave.addEventListener('click', getDataForm)

function getDataForm(event) {
    event.preventDefault();

    const newEmployee = {
        id: id,
        name: inputName.value,
        email: inputEmail.value,
        salary: Number(inputSalary.value)
    }

    //guarda este objeto en el array y posteriormente pintar.
    let result = saveEmployee(newEmployee, empleados)
    if (result) {
        printOneEmployee(newEmployee, sectionEmployees);
        id++;
    } else {
        alert('El empleado no se ha podido guardar, intentelo de nuevo mas tarde');
    }

}