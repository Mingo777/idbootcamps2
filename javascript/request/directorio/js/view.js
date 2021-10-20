//capturar los elementos con los que voy a interactuar.
let submenuPag = document.querySelector('#submenu');
let sectionUsers = document.querySelector('#team .container>div');
let viewUser = document.querySelector('#viewUser');
viewUser.style.display = 'none'
let currentPage = 0;
let numPages = 0;

function printData(pObj) {
    currentPage = pObj.page;
    numPages = pObj.total_pages;

    printUsers(pObj.data, sectionUsers);
    printPagination(numPages, submenuPag);
}

function printUsers(pArrayUsers, pSection) {
    pSection.innerHTML = "";
    pArrayUsers.forEach(user => printOneUser(user, pSection));
}

function printOneUser(pUser, pSection) {

    let article = document.createElement('article');
    article.style.cursor = 'pointer';
    article.dataset.id = pUser.id;
    article.addEventListener('click', showUser);
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h3 = document.createElement('h3');

    h3.innerText = pUser.first_name + " " + pUser.last_name;
    img.src = pUser.avatar;
    img.alt = pUser.first_name;

    div.appendChild(img);
    article.appendChild(div);
    article.appendChild(h3);

    pSection.appendChild(article);

}

function showUser(event) {
    //si quiero evitar que los elementos que contiene el article bloqueen el evento 
    getUserById(parseInt(event.currentTarget.dataset.id));

}


function printPagination(pNum, pSection) {
    pSection.innerHTML = "";
    for (let i = 1; i <= pNum; i++) {
        let active = (i === currentPage) ? 'active' : '';
        pSection.innerHTML += `<li class="${active}" onclick="gotoPage(${i})"><span class="number">${i}</span></li>`
    }
}

function gotoPage(pNumPag) {
    getUsers(pNumPag);
}

function printPageUser(pDataUser) {
    viewUser.innerHTML = `<div class="manto">
					<div class="card">
						<figure>
							<img src="${pDataUser.avatar}" alt="${pDataUser.first_name}">
						</figure>
						<aside>
							<ul>
								<li>Nombre: ${pDataUser.first_name}</li>
								<li>Apellido: ${pDataUser.last_name}</li>
								<li>Email: ${pDataUser.email}</li>
							</ul>
						</aside>
						<p onclick="closePopUp(this.parentNode.parentNode)">X</p>
					</div>
				</div>`
    viewUser.style.display = "block"
}

function closePopUp(pObj) {

    viewUser.removeChild(pObj);
    viewUser.style.display = 'none';
}