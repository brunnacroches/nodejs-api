const express = require('express');
const app = express ();

app.get('/', (req, res) => {
    res.json({mensagem:'Ola, Mundo!'});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: '+ data);
});

//res.send('Hello, World!');// linha 5
//let mensagem = {mensagem:'Ola, Mundo!'};
//res.json(mensagem);

// COMANDOS:
//npm init -y

//npm install express

//npm install express --save

//node index.js

//localhost:8080