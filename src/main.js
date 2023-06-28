const titleElem = document.getElementById('title');
titleElem.innerHTML = 'Lista de Convidados';

const listElem = document.getElementById('list');
const addItemFormElem = document.getElementById('addItemForm');
const nameInputElem = document.getElementById('nameInput');

const api = 'http://localhost:3001/contact';

function addContact(name) {
    fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    })
        .then((response) => response.json())
        .then(function (data) {
            let liElem = document.createElement('li');
            liElem.classList.add('mt-3');
            liElem.innerHTML = name;

            let removeBtnElem = document.createElement('button');
            removeBtnElem.classList.add('btn', 'btn-danger', 'ms-3');
            removeBtnElem.innerHTML = '<i class="bi bi-trash3"></i>';
            removeBtnElem.addEventListener('click', function () {
                removeContact(liElem);
            });
            liElem.appendChild(removeBtnElem);

            let editBtnElem = document.createElement('button');
            editBtnElem.classList.add('btn', 'btn-primary', 'ms-3');
            editBtnElem.innerHTML = '<i class="bi bi-pencil"></i>';
            editBtnElem.addEventListener('click', function () {
                editContact(liElem);
            });
            liElem.appendChild(editBtnElem);

            listElem.appendChild(liElem);
        });

    nameInputElem.value = '';
}

function removeContact(liElem) {
    const index = Array.from(listElem.children).indexOf(liElem);
    fetch(`${api}/${index}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then(function (data) {
            listElem.removeChild(liElem);
        });
}

function editContact(liElem) {
    const name = prompt('Digite o novo nome:');
    if (name) {
        const index = Array.from(listElem.children).indexOf(liElem);
        fetch(`${api}/${index}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name }),
        })
            .then((response) => response.json())
            .then(function (data) {
                liElem.innerHTML = name;
            });
    }
}

// Fetch API
fetch(api, { method: 'GET' })
    .then((response) => response.json())
    .then(function (data) {
        data.map((contact) => {
            let liElem = document.createElement('li');
            liElem.classList.add('mt-3');
            liElem.innerHTML = contact.name;

            let removeBtnElem = document.createElement('button');
            removeBtnElem.classList.add('btn', 'btn-danger', 'ms-3');
            removeBtnElem.innerHTML = '<i class="bi bi-trash3"></i>';
            removeBtnElem.addEventListener('click', function () {
                removeContact(liElem);
            });
            liElem.appendChild(removeBtnElem);

            let editBtnElem = document.createElement('button');
            editBtnElem.classList.add('btn', 'btn-primary', 'ms-3');
            editBtnElem.innerHTML = '<i class="bi bi-pencil"></i>';
            editBtnElem.addEventListener('click', function () {
                editContact(liElem);
            });
            liElem.appendChild(editBtnElem);

            listElem.appendChild(liElem);
        });
    });

addItemFormElem.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = nameInputElem.value.trim();

    if (name) {
        addContact(name);
    }
});