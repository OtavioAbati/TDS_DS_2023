const express = require('express');
const {buscaTodos, vincularProfAlunos } = require("../controller/secretaria.controller")

const routes = new express.Router();

routes.get("/", buscaTodos);
routes.post("/turma", vincularProfAlunos);



module.exports = routes;