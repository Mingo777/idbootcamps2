/*
*   function saveEmployee guarda un nuevo empleado en el array global del empleados
*/

function saveEmployee(pEmployee, pEmployeesList) {
    let result = 0;
    //antes de hacer push tengo que comprar si el empleado no existe dentro del array.
    //busco con filter el elemento dentro del array si existe me devolvera un array de longitud distinta de cero.
    const existElement = pEmployeesList.filter(employee => employee.email === pEmployee.email);

    if (existElement.length === 0) {
        result = pEmployeesList.push(pEmployee);
    }


    if (result !== 0) {
        return true;
    }
    else {
        return false;
    }
}

function deleteArray(pId, pEmployeesList) {

    //tengo un id, que es un dato del propio objeto del array y quiero su posicion. findIndex me devuelve la posicion de un objeto dentro del array si lo encuentra.

    let position = pEmployeesList.findIndex(employee => employee.id === pId)

    if (position !== -1) {
        pEmployeesList.splice(position, 1);
        console.log(pEmployeesList);
        return true
    }
    return false;
}