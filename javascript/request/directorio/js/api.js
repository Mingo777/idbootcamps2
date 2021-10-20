const baseUrl = "https://reqres.in/api/users";

async function getUsers(pPage = 1) {
    const url = baseUrl + '?page=' + pPage;
    const response = await fetch(url, { method: 'GET' });
    const result = await response.json();
    printData(result);
}


getUsers();


async function getUserById(pId) {
    const url = baseUrl + "/" + pId;
    const response = await fetch(url, { method: 'GET' });
    const result = await response.json();
    printPageUser(result.data);
}