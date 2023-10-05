const express = require('express');
const { listaAlunos, buscaAlunorPorId, inserir, atualizar, deletar} = require('../controller/alunos.controller');
const routes = new express.Router();


routes.get("/", listaAlunos);
routes.post("/", inserir);
routes.put("/(:id([0-9]+))", atualizar)
routes.get("/(:id([0-9]+))", buscaAlunorPorId);
routes.delete("/(:id([0-9]+))", deletar);


//Tudo oq tiver de modules será exportado para outro arquivo
module.exports = routes;