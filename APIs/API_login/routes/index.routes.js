const express = require('express');
const usuarioRoute = require("./usuario.route");
const atribuicaoRoute = require("./atribuicao.routes");
const recSenhaRoute = require("./rec_senha.routes");

const routes = express.Router();

routes.use("/usuario", usuarioRoute);
routes.use("/atribuicao", atribuicaoRoute);
routes.use("/recSenha", recSenhaRoute);

module.exports = routes;