const express = require('express');
const {soma, somaParametro } = require("../controller/soma.controller")

const routes = new express.Router();

routes.get("/", soma);

routes.post("/parametros", somaParametro);

module.exports = routes;