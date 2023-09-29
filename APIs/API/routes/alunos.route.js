const express = require('express');
const { listaAlunos } = require('../controller/alunos.controller');
const routes = new express.Router();


routes.get("/", listaAlunos);

routes.get("/notas", (request, response)=>{
    response.send("Notas");
});

routes.get("/livros", (request, response)=>{
    response.send("Livros");
});

routes.get("/perfil", (request, response)=>{
    response.send("Perfil");
});
//Tudo oq tiver de modules será exportado para outro arquivo
module.exports = routes;