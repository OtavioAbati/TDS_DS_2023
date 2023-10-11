const express = require('express');
const { listaProfessores, inserir, update, buscaProfessorPorId, deleteProf } = require('../controller/professores.controller');
const routes = new express.Router();

routes.get("/", listaProfessores);
routes.post("/", inserir);
routes.put("/(:id([0-9]+))", update);
routes.get("/(:id([0-9]+))", buscaProfessorPorId);
routes.delete("/(:id([0-9]+))", deleteProf);

module.exports = routes;