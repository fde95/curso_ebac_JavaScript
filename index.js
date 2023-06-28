const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();

server.listen(3001);
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const contacts = [
    { "name": "Felipe" }, 
    { "name": "Beatriz" },
    { "name": "Juan" },
    { "name": "Andrea" },
    { "name": "Pablo" },
    { "name": "Vanessa" }
];

server.get('/', (req, res) => {
    console.log('executando a rota com o GET + nodemon atualizando');
});


server.get('/contact', (req, res) => {
    return res.json(contacts);
});

server.post('/contact', (req, res) => {
    const { name } = req.body;
    contacts.push({ name });
    return res.json(contacts);
});

server.put('/contact/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    contacts[index] = { "name": name };

    return res.json(contacts);
});

server.delete('/contact/:index', (req, res) => {
    const { index } = req.params;
    contacts.splice(index, 1);
    return res.json(contacts);
});