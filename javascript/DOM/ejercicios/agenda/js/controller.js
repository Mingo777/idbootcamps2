let id = 1;

function saveContact(pName, pSurname, pPhone, pEmail, pType, pAgenda) {

    const newContact = {
        name: pName,
        surname: pSurname,
        phone: pPhone,
        email: pEmail,
        type: pType
    }
    //insertar el en array de agenda pero primero debo comprobar si ya existe dentro de la agenda.
    let position = pAgenda.findIndex(contact => contact.phone === newContact.phone || contact.email === newContact.email)

    if (position !== -1) {
        alert('El usuario ya existe en la agenda');
        return false;
    }
    id++;
    newContact.id = id;
    //console.log(newContact);
    pAgenda.push(newContact);
    return true;
}

saveContact('Pepe', 'Villuela', 4567890, 'pepe@gmail.com', 'laboral', agenda);

saveContact('Natalia', 'Casilda', 4567890, 'nat@gmail.com', 'personal', agenda);

saveContact('Jorge', 'Lopez', 87654, 'jorge@gmail.com', 'laboral', agenda);


function deleteArray(pId, pAgenda) {

    //saber la posicion del array del elemento que tengo el id
    let position = pAgenda.findIndex(contact => contact.id === pId);

    if (position !== -1) {
        pAgenda.splice(position, 1);
        return true;
    } else {
        return false;
    }

    //borrar por esa posicion

}