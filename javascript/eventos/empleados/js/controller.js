/*
*   function saveEmployee guarda un nuevo empleado en el array global del empleados
*/

function saveEmployee(pEmployee, pEmployeesList) {
    let result = 0;
    result = pEmployeesList.push(pEmployee);

    if (result !== 0) {
        return true;
    }
    else {
        return false;
    }
}