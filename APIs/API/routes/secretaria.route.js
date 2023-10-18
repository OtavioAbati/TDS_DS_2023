const express = require('express');
const {somaParametro, buscaTodos } = require("../controller/secretaria.controller")

const routes = new express.Router();

routes.get("/", buscaTodos);



module.exports = routes;